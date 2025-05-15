import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";

//Uncomment the following line if using MongoDB
//import records from "./routes/record.mjs";

//Uncomment the following line if using SQLite
import records from "./routes/record_sql.mjs";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);

// start the Express server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});