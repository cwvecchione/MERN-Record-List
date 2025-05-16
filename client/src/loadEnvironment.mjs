import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Select the CLIENT_URL based on the database platform being used (MongoDB, SQLite, Turso)
const db_platform = "SQLite";

let CLIENT_URL

function getENV() {
    return new Promise((CLIENT_URL) => {
        if(db_platform === "MongoDB")
            CLIENT_URL = process.env.CLIENT_URL_MONGODB;
        else if (db_platform === "Turso")
            CLIENT_URL = process.env.CLIENT_URL_TURSO;
        else
            CLIENT_URL = process.env.CLIENT_URL_SQL;
    });
}

    getENV();