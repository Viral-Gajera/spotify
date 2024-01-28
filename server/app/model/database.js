let mysql = require("mysql2/promise");

const DB = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
});

if (DB) {
    console.log("Database connected!");
}

module.exports = DB;
