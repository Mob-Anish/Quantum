const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

//------- Server is started on port -------//
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
