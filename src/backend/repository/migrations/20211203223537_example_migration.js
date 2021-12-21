exports.up = async (knex) => {
  // You are welcome to use raw SQL if that speeds things up for you
  await knex.raw(`
    CREATE TABLE example_table (
        id serial PRIMARY KEY,
        is_this_great BOOLEAN DEFAULT TRUE,
        created_on TIMESTAMP NOT NULL
    );
  `);
};

exports.down = async (knex) => {
  await knex.schema.dropTable('example_table');
};
