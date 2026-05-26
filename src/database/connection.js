const { Pool } = require("pg");
const env = require("../config/env");

const pool = new Pool({
    connectionString: env.databaseUrl
});

async function query(queryString, params) {
    const result = await pool.query(queryString, params);
    console.log(`Query success: ${result.command}`);
    return result;
}

async function getClient() {
    return await pool.connect();
}

module.exports = { query, getClient };
