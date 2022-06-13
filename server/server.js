const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

//------- DATABASE CONNECTION --------//

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

let sql = "SELECT * FROM users";

// Connecting to database
connection.execute(sql, (err, res) => {
  if (err) throw console.log(err);

  console.log("Database Connection Successful");
});

//------- Server is started on port -------//
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
