const AppError = require("../utils/appError");
const jwt = require("../utils/jwt");
const catchAsync = require("../utils/catchAsync");
const db = require("../database");

// Check if user is authenticated
const protect = catchAsync(async (req, res, next) => {
  const authorization = req.headers["authorization"];
  const bearer = authorization.toLowerCase().startsWith("bearer");
  if (!(authorization && bearer))
    next(new AppError("Oops you are not allowed 😅", 401));

  const token = authorization.split(" ")[1];
  const decoded = jwt.verifyToken(token, process.env.JWT_SECRET);

  // Check if user still exists
  const { rows } = await db.query(
    `SELECT * FROM users WHERE email = '${decoded.email}'`
  );

  if (rows.length) {
    return next(
      new AppError("The user belonging to this token does no longer exist", 401)
    );
  }

  req.user = rows[0];
  next();
});

// Check if user is authorized
const permission = (role) => (req, res, next) => {
  if (role !== req.user.role) {
    return next(new AppError("You are allowed to access this resource", 403));
  }
};
