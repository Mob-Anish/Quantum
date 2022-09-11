const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");

// Token creation using jwt
exports.createEmailToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EMAIL_EXPIRES_IN,
  });
};

// Token after account creation
exports.createToken = (name, email) => {
  return jwt.sign({ name, email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.verifyToken = (token, secretKey) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    if (error.name === "TokenExpiredError")
      throw new AppError("Token is expired. Please Login", 401);

    throw error;
  }
};
