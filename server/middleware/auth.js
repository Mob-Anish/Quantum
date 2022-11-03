const AppError = require("../utils/appError");
const jwt = require("../utils/jwt");
const catchAsync = require("../utils/catchAsync");
const db = require("../database");
const { decode } = require("jsonwebtoken");

// Check if user is authenticated
exports.protect = catchAsync(async (req, res, next) => {
  const authorization = req.headers["authorization"];
  console.log(authorization);
  if (!(authorization && authorization.toLowerCase().startsWith("bearer")))
    next(new AppError("Oops you are not allowed 😅", 401));

  const token = authorization.split(" ")[1];
  const decoded = jwt.verifyToken(token, process.env.JWT_SECRET);

  // Invalid Token
  if (!decoded) {
    return next(new AppError("Invalid token", 401));
  }

  // Check if user still exists
  const { rows } = await db.query(
    `SELECT * FROM users WHERE email = '${decoded.email}'`
  );

  if (!rows.length) {
    return next(
      new AppError("The user belonging to this token does no longer exist", 401)
    );
  }

  req.user = rows[0];
  next();
});

// Check if user is authorized
exports.permission = (role) => (req, res, next) => {
  if (role !== req.user.role) {
    return next(
      new AppError("You are not allowed to access this resource", 403)
    );
  }

  next();
};
