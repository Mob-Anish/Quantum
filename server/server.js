const { Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

//------- DATABASE CONNECTION --------//

const db = new Client({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

// Connecting to database
db.connect();

//------- Server is started on port -------//
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});

module.exports = db;
