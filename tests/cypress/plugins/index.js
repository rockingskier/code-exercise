const { setupDatabase, clearDatabase } = require('../../../src/backend/repository/db');

/* Cypress Code runs in a browser process and so doesn't have access to the database
 * this plugin file allows us to create tasks which run in a node process */

module.exports = (on) => {
  on('task', {
    clearDb: async () => {
      if (process.env.PRODUCTION_TESTS) {
        return true;
      }

      await setupDatabase();
      await clearDatabase();
      return true;
    },
  });
};
