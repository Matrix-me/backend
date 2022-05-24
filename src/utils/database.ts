import pg from 'pg';

const database = new pg.Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
});

database.connect();
database.query('create table if not exists spaces (id serial primary key, matrixid text, name text, description text)');

export default database;