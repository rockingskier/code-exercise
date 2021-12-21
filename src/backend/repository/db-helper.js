const { db, setupDatabase, clearDatabase } = require('./db');

function withDbHelper() {
  beforeAll(async () => {
    await setupDatabase();
  });

  afterAll(async () => {
    await db.destroy();
  });

  beforeEach(async () => {
    await clearDatabase();
  });
}

module.exports = { withDbHelper };
