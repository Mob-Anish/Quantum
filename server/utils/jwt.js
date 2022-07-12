const jwt = require("jsonwebtoken");

// Token creation using jwt
const createToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

module.exports = createToken;
