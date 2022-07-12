const catchAsync = require("../utils/catchAsync");
const Email = require("../utils/email");
const createToken = require("../utils/jwt");
const validator = require("validator");
const AppError = require("../utils/appError");

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
});
