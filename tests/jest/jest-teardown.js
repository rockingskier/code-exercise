const { db } = require('../../src/backend/repository/db');

module.exports = async () => {
  await db.destroy();
};
