const fruits = [
  {
    name: 'papaya',
    color: 'green',
    ripeness: 10,
    icon: '🫒',
  },
  {
    name: 'apple',
    color: 'red',
    ripeness: 4,
    icon: '🍎',
  },
  {
    name: 'lemon',
    color: 'yellow',
    ripeness: 1,
    icon: '🍋',
  },
  {
    name: 'banana',
    color: 'yellow',
    ripeness: 7,
    icon: '🍌',
  },
];

exports.up = async (sql) => {
  await sql`
    INSERT INTO fruits ${sql(fruits, 'name', 'color', 'ripeness', 'icon')}
  `;
};

exports.down = async (sql) => {
  for (const fruit of fruits) {
    await sql`
      DELETE FROM
        fruits
      WHERE
        name = ${fruit.name} AND
        color = ${fruit.color} AND
        ripeness = ${fruit.ripeness} AND
				icon = ${fruit.icon}
    `;
  }
};
