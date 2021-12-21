const knex = require('knex');
const knexCleaner = require('knex-cleaner');
const knexfile = require('./knexfile');

const config = knexfile[process.env.NODE_ENV || 'development'];
const db = knex(config);

const setupDatabase = async () => db.migrate.latest();

const clearDatabase = async () => {
  await db.raw('SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE state = \'active\' and pid != pg_backend_pid()');
  await knexCleaner.clean(db, { ignoreTables: ['knex_migrations', 'offer_rejections'] });
};

const checkDatabaseConnection = async () => {
  try {
    await db.select(db.raw('1'));
  } catch (err) {
      console.error(`Error connecting to database ${JSON.stringify(config.connection)}`); // eslint-disable-line
      console.error(err); // eslint-disable-line
    throw err;
  }
  return db;
};

module.exports = {
  db, setupDatabase, clearDatabase, checkDatabaseConnection,
};
