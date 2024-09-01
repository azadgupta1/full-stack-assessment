const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',         // Replace with your PostgreSQL username
    host: 'localhost',             // Usually 'localhost' for local PostgreSQL
    database: 'User_db',           // Replace with your database name
    password: '@23az68ad20',     // Replace with your PostgreSQL password
    port: 5432,                    // Default port for PostgreSQL
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
