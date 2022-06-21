import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { getUserById, User } from '../../util/database';

type Props = {
  user?: User;
};

export default function UserDetail(props: Props) {
  if (!props.user) {
    return (
      <>
        <Head>
          <title>user not found</title>
          <meta name="description" content="user not found" />
        </Head>
        <main>
          <h1>User not found</h1>
        </main>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About the app" />
      </Head>
      <main>
        <h1>About this app</h1>
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const userIdFromUrl = context.query.userId;

  if (!userIdFromUrl || Array.isArray(userIdFromUrl)) {
    return { props: {} };
  }

  const user = await getUserById(parseInt(userIdFromUrl));

  if (!user) {
    context.res.statusCode = 404;
    return { props: {} };
  }

  return { props: { user: user } };
}
