const catchAsync = require("../utils/catchAsync");
const Email = require("../utils/email");
const jwtToken = require("../utils/jwt");
const validator = require("validator");
const AppError = require("../utils/appError");
const db = require("../database");

// Sending JWT Token
// const sendToken = (email, statusCode, req, res) => {
//   // Create token
//   const token = createToken(email);

//   // Sending to the browser cookies
//   res.cookie("jwt", token, {
//     // In millisecods
//     expires: new Date(
//       Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
//     ),
//   });

//   res.status(statusCode).json({
//     status: "success",
//     message: "Token sent successfully",
//   });
// };

//----- Verify email ------//
exports.verifyEmail = catchAsync(async (req, res, next) => {
  const email = req.body.email;

  // Check if email is valid
  if (!validator.isEmail(email))
    next(new AppError("Your email is not supported in the system 😅", 400));

  // Creating Token
  const token = jwtToken.createEmailToken(email);

  // Sending Email
  const url = `http://localhost:3000/readytogo/create-account?token=${token}`;
  await new Email(email, url).sendVerifyEmail();

  res.status(200).json({
    status: "success",
    message: "verification email sent successfully",
  });
});

//----- Create Account -------//
exports.register = catchAsync(async (req, res, next) => {
  const { name, username, email } = req.body;

  // Creating Token
  const token = jwtToken.createToken(name, email);

  const result = await db.query(
    `SELECT * FROM users WHERE username = '${username}'`
  );

  console.log(result);

  if (result.rows) {
    return res.status(400).json({
      status: "fail",
      username: "Username is already taken 🤕",
    });
  }

  res.status(200).json({
    data: result.rows,
  });
});
