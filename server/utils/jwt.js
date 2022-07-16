const jwt = require("jsonwebtoken");

// Token creation using jwt
exports.createEmailToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Token after account creation
exports.createToken = (name, email) => {
  return jwt.sign({ name, email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
