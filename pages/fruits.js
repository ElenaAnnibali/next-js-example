import Link from 'next/link';
import { fruitsDatabase } from '../util/database';

export default function Fruits(props) {
  return (
    <>
      <h1>Fruits</h1>
      <ul>
        {props.fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              <Link href={`/fruits/${fruit.id}`}>{fruit.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {
      fruits: fruitsDatabase,
    },
  };
}
