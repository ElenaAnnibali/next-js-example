import camelcaseKeys from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

// simulate a Node.js server-side dependency to make
// the file fail if used in the frontend
// import fs from 'node:fs';

// console.log(fs);

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370

declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres();
  }
  const sql = globalThis.postgresSqlClient;
  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

export type Mathematic = {
  id: number;
  firstName: string;
  type: string;
  fun: string;
};

export async function getMathematics() {
  const mathematics = await sql<Mathematic[]>`
    SELECT * FROM mathematics;
  `;
  return mathematics.map((mathematic) => camelcaseKeys(mathematic));
}

export async function getMathematicById(id?: number) {
  if (!id) return undefined;
  const [mathematic] = await sql<
    [Mathematic | undefined]
  >`  /* sql is async. if you run this query we will ge a promise, for this reason we need to await */
  SELECT * FROM mathematics
  WHERE id = ${id}
`;
  return mathematic && camelcaseKeys(mathematic);
}

export async function getFruits() {
  const fruits = await sql`
    SELECT * FROM fruits
  `;
  return fruits.map((fruit) => camelcaseKeys(fruit));
}

export async function getFruitById(id: number) {
  const [fruit] = await sql`
    SELECT
      *
    FROM
      fruits
    WHERE
      id = ${id}
  `;
  return camelcaseKeys(fruit);
}

export async function getFruitWithInsectsById(fruitId: number) {
  const fruitsWithInsects = await sql`
    SELECT
      fruits.id AS fruit_id,
      fruits.name AS fruit_name,
      fruits.icon AS animal_icon,
      insects.id AS insect_id,
      insects.name AS insect_name
    FROM
      fruits,
      fruits_insects,
      insects
    WHERE
      fruits.id = ${fruitId} AND
      fruits_insects.fruit_id = fruits.id AND
      insects.id = fruits_insects.insect_id

  `;
  return camelcaseKeys(fruitsWithInsects);
}

/* export const mathematicsDatabase = [
  { id: '1', first_name: 'multiplication', type: 'algebra', fun: 'just fine' },
  { id: '2', first_name: 'matrix', type: 'linear geometry', fun: 'super fun!' },
  {
    id: '3',
    first_name: 'differential equation',
    type: 'function analysis',
    fun: 'hardcore fun',
  },
  {
    id: '4',
    first_name: 'integral',
    type: 'function analysis',
    fun: 'addictive',
  },
  {
    id: '5',
    first_name: 'limits',
    type: 'function analysis',
    fun: 'sometimes boring',
  },
]; */

export const fruitsDatabase = [
  {
    id: '1',
    name: 'papaya',
    color: 'green',
    ripeness: 10,
    icon: '🫒',
  },
  {
    id: '2',
    name: 'apple',
    color: 'red',
    ripeness: 4,
    icon: '🍎',
  },
  {
    id: '3',
    name: 'lemon',
    color: 'yellow',
    ripeness: 1,
    icon: '🍋',
  },
  {
    id: '4',
    name: 'banana',
    color: 'yellow',
    ripeness: 7,
    icon: '🍌',
  },
];
