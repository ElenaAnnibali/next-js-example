import Head from 'next/head';
import { getMathematic } from '../../util/database';

export default function Mathematic(props) {
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

export async function getServerSideProps(context) {
  // console.log(context.query);
  // const foundMathematic = mathematicsDatabase.find((mathematic) => {
  // This comes from the URL, and its name
  // is based on the filename [animalId].js
  // return mathematic.id === context.query.mathematicId;
  //  });

  // if (!foundMathematic) {
  // context.res.statusCode = 404;
  // }
  const mathematic = await getMathematic(context.query.mathematicId);

  return {
    props: {
      // mathematicId: context.query.mathematicId,
      mathematic: mathematic,
    },
  };
}
