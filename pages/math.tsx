import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { getMathematics, Mathematic } from '../util/database';

const mathsListStyles = css`
  background: #dfd;
  padding: 10px;
`;

const mathsListItemStyles = css`
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fdfdfd;
  padding: 12px 16px;
  & + & {
    margin-top: 10px;
  }
`;

type Props = {
  mathematics: Mathematic[];
};

export default function Mathematics(props: Props) {
  return (
    <div>
      <Head>
        <title>Mathematics</title>
        <meta
          // mame="description"
          content="List of various mathematical operations"
        />
      </Head>
      <h1>Mathematical Operations</h1>

      <div css={mathsListStyles}>
        {props.mathematics.map((mathematic) => {
          return (
            <div css={mathsListItemStyles} key={`mathematic-${mathematic.id}`}>
              <div>
                name:{' '}
                <Link href={`/mathematics/${mathematic.id}`}>
                  {mathematic.firstName}
                </Link>
              </div>
              <div>type: {mathematic.type}</div>
              <div>fun: {mathematic.fun}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Anything in getServerSideProps runs in
// node.js (on the server)

// important: this works only in the /page directory
export async function getServerSideProps() {
  const mathematics = await getMathematics();
  // console.log(mathematicsDatabase)
  return {
    // anything that you pass in the props object
    // will get passed to the component at the top
    // in the props parameter

    props: {
      mathematics: mathematics,
    },
  };
}
