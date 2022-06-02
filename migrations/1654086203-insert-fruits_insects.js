const fruitsInsects = [
  { fruit_id: 1, insect_id: 1 }, // papaya likes queen bee
  { fruit_id: 1, insect_id: 5 }, // papaya also likes sassy ladybug
  { fruit_id: 3, insect_id: 5 }, // lemon likes sassy ladybug
];

exports.up = async (sql) => {
  await sql`
    INSERT INTO fruits_insects ${sql(fruitsInsects, 'fruit_id', 'insect_id')}
  `;
};

exports.down = async (sql) => {
  for (const fruitsInsect of fruitsInsects) {
    await sql`
      DELETE FROM
        fruits_insects
      WHERE
        fruit_id = ${fruitsInsect.fruit_id} AND
				insect_id = ${fruitsInsect.insect_id}

    `;
  }
};
