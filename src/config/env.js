require('dotenv').config();

function required(name) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`❌ Missing environment variable: ${name}`);
    }
    return value;
}

const env = {
    port: required("PORT"),
    databaseUrl: required("DATABASE_URL"),
    sessionSecret: required("SESSION_SECRET"),
    nodeEnv: required("NODE_ENV")
};

module.exports = env;