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
function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres();
  }
  const sql = globalThis.postgresSqlClient;
  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

export async function getMathematics() {
  const mathematics = await sql`
    SELECT * FROM mathematics;
  `;
  return mathematics.map((mathematic) => camelcaseKeys(mathematic));
}

export async function getMathematic(id) {
  const [mathematic] =
    await sql`  /* sql is async. if you run this query we will ge a promise, for this reason we need to await */
  SELECT * FROM mathematics
  WHERE id = ${id}
`;
  return camelcaseKeys(mathematic);
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
