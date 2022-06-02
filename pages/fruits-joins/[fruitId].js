import Head from 'next/head';
import { getFruitWithInsectsById } from '../../util/database';

export default function Fruit(props) {
  if (!props.fruitWithInsects) {
    return (
      <div>
        <Head>
          <title>Fruit not found</title>
          <meta
            name="description"
            content="Unfortunately, we have had trouble locating the fruit you are looking for. Better luck next time."
          />
        </Head>

        <h1>fruit not found</h1>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{props.fruitWithInsects.name}</title>
        <meta
          name="description"
          content={`${props.fruitWithInsects.name} is a ${props.fruitWithInsects.color} fruit and it looks like this ${props.fruitWithInsects.icon}`}
        />
      </Head>

      <h1>{props.fruitWithInsects.name}</h1>

      <div>
        <div>
          <div>id: {props.fruitWithInsects.id}</div>
          <div>icon: {props.fruitWithInsects.icon}</div>
          <div>
            insects:
            <ul>
              {props.fruitWithInsects.insects.map((insect) => {
                return <li key={`insect-${insect.id}`}>{insect.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const fruitsWithInsects = await getFruitWithInsectsById(
    context.query.fruitId,
  );

  const fruitWithInsects = {
    id: fruitsWithInsects[0].fruitId,
    name: fruitsWithInsects[0].fruitName,
    icon: fruitsWithInsects[0].fruitIcon,
    insects: fruitsWithInsects.map((insect) => {
      return {
        id: insect.insectId,
        name: insect.insectName,
      };
    }),
  };

  console.log('with insects', JSON.stringify(fruitWithInsects, null, 2));

  return {
    props: {
      fruitWithInsects,
    },
  };
}
