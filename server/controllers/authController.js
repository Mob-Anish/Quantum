const catchAsync = require("../utils/catchAsync");
const Email = require("../utils/email");
const jwtToken = require("../utils/jwt");
const validator = require("validator");
const AppError = require("../utils/appError");
const db = require("../database");

//----- Verify email ------//
exports.verifyEmail = catchAsync(async (req, res, next) => {
  const email = req.body.email;

  // 1) Check if email is valid
  if (!validator.isEmail(email))
    next(new AppError("Your email is not supported in the system 😅", 400));

  // 2) Check if email exists in db
  const { rows } = await db.query(
    `SELECT * FROM users WHERE email = '${email}'`
  );

  // If user exist then providing token
  if (rows.length) {
    // Creating Token
    const token = jwtToken.createEmailToken(rows[0].email);

    // Sending Email
    const url = `http://localhost:3000/readytogo/onboard/${token}`;
    await new Email(email, url).sendVerifyEmail();
    return res.status(200).json({
      status: "success",
      message: "verification email sent successfully",
    });
  }

  // 3) If user doesnot exists
  const token = jwtToken.createEmailToken(email);

  // Sending Email for creating account
  const url = `http://localhost:3000/readytogo/create-account/${token}`;
  await new Email(email, url).sendVerifyEmail();

  res.status(200).json({
    status: "success",
    message: "verification email sent successfully",
  });
});

//----- Create Account -------//
exports.register = catchAsync(async (req, res, next) => {
  const { name, username, email, tagline } = req.body;

  // Creating Token
  // const token = jwtToken.createToken(name, email);

  // Check if username exists
  const { rows } = await db.query(
    `SELECT * FROM users WHERE username = '${username}'`
  );

  // If username already exists
  if (rows.length) {
    return res.status(400).json({
      status: "fail",
      username: "Username is already taken 🤕",
    });
  }
});

//----- Google Authentication ------//
exports.googleAuthenticate = catchAsync(async (req, res, next) => {
  const { name, email } = req.body;

  // 1) Check if user already exists
  const { rows } = await db.query(
    `SELECT * FROM users WHERE name = '${name}' AND email = '${email}'`
  );

  // 2) If user exist then providing token
  if (rows.length) {
    // Creating Token
    const token = jwtToken.createToken(rows[0].name, rows[0].email);

    return res.status(200).json({
      status: "success",
      token,
      data: rows,
    });
  }

  // 3) If user doesnot exist
  // Creating token for gmail account
  const token = jwtToken.createEmailToken(email);

  // Sending response with url
  res.status(200).json({
    status: "success",
    url: `/readytogo/create-account/${token}`,
  });
});

//------- Login -------//
exports.login = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  // Retrieve the data
  const { rows } = await db.query(
    `SELECT * FROM users WHERE email = '${email}'`
  );

  if (rows.length) {
    const token = jwtToken.createToken(rows[0].name, rows[0].email);

    return res.status(200).json({
      status: "success",
      token,
      data: rows[0],
    });
  }
});
