const jwt = require("jsonwebtoken");
const Email = require("../utils/email");

// Token creation using jwt
const createToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Sending JWT Token
const sendToken = (email, statusCode, req, res) => {
  // Create token
  const token = createToken(email);

  // Sending to the browser cookies
  res.cookie("jwt", token, {
    // In millisecods
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
  });

  res.status(statusCode).json({
    status: "success",
    message: "Token sent successfully",
  });
};

//----- Verify email ------//
exports.verifyEmail = async (req, res, next) => {
  const email = req.body.email;

  // Creating Token
  const token = createToken(email);

  // Sending Email
  const url = `${req.protocol}://${req.get(
    "host"
  )}/create-account?token=${token}`;
  await new Email(email, url).sendVerifyEmail();

  res.status(200).json({
    status: "success",
    message: "verification email sent successfully",
  });
};
