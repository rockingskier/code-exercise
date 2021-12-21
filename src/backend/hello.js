const { db } = require('./repository/db');

async function listTables() {
  return db('pg_catalog.pg_tables')
    .select('tablename')
    .where({ schemaname: 'public' });
}

module.exports = {
  listTables,
};
