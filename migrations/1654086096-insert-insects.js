const insects = [
  { name: 'queen bee' },
  { name: 'angry wasp' },
  { name: 'wise ant' },
  { name: 'lifelong dragonfly' },
  { name: 'sassy ladybug' },
  { name: 'dirty fly' },
];

exports.up = async (sql) => {
  await sql`
    INSERT INTO insects ${sql(insects, 'name')}
  `;
};

exports.down = async (sql) => {
  for (const insect of insects) {
    await sql`
      DELETE FROM
        insect
      WHERE
        name = ${insect.name}
    `;
  }
};
