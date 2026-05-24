const crypto = require('node:crypto');

const secret = crypto.randomBytes(64).toString("hex");

console.log("\nSESSION_SECRET:\n");
console.log(secret);
console.log("\n");