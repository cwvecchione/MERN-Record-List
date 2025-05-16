import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Select the Client and Server paths based on the database platform being used (MongoDB, SQLite, Turso)
export const dbPlatform = "SQLite";

let clientPath, serverPath;
if (dbPlatform === "MongoDB")
    serverPath = process.env.SERVER_URL_MONGODB;
else if (dbPlatform === "Turso")
    serverPath = process.env.SERVER_URL_TURSO;
else
    serverPath = process.env.SERVER_URL_SQL;

if(dbPlatform === "MongoDB")
    clientPath = process.env.CLIENT_URL_MONGODB;
else if (dbPlatform === "Turso")
    clientPath = process.env.CLIENT_URL_TURSO;
else
    clientPath = process.env.CLIENT_URL_SQL;

export { clientPath, serverPath };