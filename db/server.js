const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
    // connectionString: 'postgresql://postgres:123456@localhost:5432/book-buddy'
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})


module.exports = pool;