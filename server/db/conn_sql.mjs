const mysql = require('mysql')

const connection = mysql.createConnection({
    host: `${process.env.SQL_HOST}`,
    user: `${process.env.SQL_USER}`,
    password: `${process.env.SQL_PASSWORD}`,
    database:`${process.env.SQL_DB}` 
})

let conn;
try {
    conn = connection.connect()
} catch(e) {
    console.error(e);
}


export default db;