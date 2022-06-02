import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { getMathematicById, Mathematic } from '../../util/database';
import { queryParamToNumber } from '../../util/queryParams';

type Props = {
  mathematic: Mathematic | null;
};

export default function SingleMathematic(props: Props) {
  if (!props.mathematic) {
    return (
      <div>
        <Head>
          <title>Mathematical operation not found</title>
          <meta
            name="description"
            content="Unfortunately, we have had trouble locating the mathematical operation you are looking for. Better luck next time."
          />

          <h1>Mathematical operation not found</h1>
        </Head>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{props.mathematic.firstName}</title>
        <meta
          name="description"
          content={`${props.mathematic.firstName} is a ${props.mathematic.type}`}
        />
      </Head>

      <h1>{props.mathematic.firstName}</h1>

      <div>
        <div>
          <div>
            {/* <Image src={`/${props.animal.id}.jpeg`} width="400" height={300} /> */}
          </div>
          <div>id: {props.mathematic.id}</div>
          <div>fun: {props.mathematic.fun}</div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // console.log(context.query);
  // const foundMathematic = mathematicsDatabase.find((mathematic) => {
  // This comes from the URL, and its name
  // is based on the filename [animalId].js
  // return mathematic.id === context.query.mathematicId;
  //  });

  // if (!foundMathematic) {
  // context.res.statusCode = 404;
  // }

  const mathematicId = queryParamToNumber(context.query.mathematicId);
  const mathematic = await getMathematicById(mathematicId);

  return {
    props: {
      // mathematicId: context.query.mathematicId,
      mathematic: mathematic || null,
    },
  };
}
