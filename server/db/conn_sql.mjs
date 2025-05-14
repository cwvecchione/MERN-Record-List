import { sqlite3 } from 'sqlite3';

const connection = new sqlite3.Database('./employees.db');

let conn;
try {
    conn = connection.connect()
} catch(e) {
    console.error(e);
}

export default db;