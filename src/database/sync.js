const { query } = require("./connection");

async function syncDatabase() {
  try {
    await query(`
      CREATE TABLE IF NOT EXISTS test_sync (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL
      );
    `);

    console.log('Table test_sync created or already exists');
  } catch (error) {
    console.error(`Database sync error: ${error.message}`);
  }

  process.exit(0);
}

syncDatabase();