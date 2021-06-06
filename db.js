const Pool = require('pg').Pool; //for requests to bd
const pool = new Pool({
    user: "postgres",
    password: "91upetiv",
    host: "localhost",
    port: 5432,
    database: "airport"
});

module.exports = pool;