export async function up(sql) {
  await sql`CREATE TABLE fruits (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(50) NOT NULL,
    color varchar(50) NOT NULL,
    ripeness varchar(20) NOT NULL,
    icon varchar(20) NOT NULL
  )`;
}

export async function down(sql) {
  await sql`
    DROP TABLE fruits;
  `;
}
