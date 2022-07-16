const { Pool } = require("pg");

//------- DATABASE CONNECTION --------//

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT,
});

// let querie = `SELECT * FROM users`;

// db.query(querie, (err, res) => {
//   if (err) console.log(err);

//   console.log(res.rows);
// });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
