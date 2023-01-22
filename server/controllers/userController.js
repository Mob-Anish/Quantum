const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const db = require("../database");

// Get specific user from db.
exports.getUser = catchAsync(async (req, res, next) => {
  const username = req.params.username;

  const userData = await db.query(
    `SELECT * FROM users WHERE username = '${username}'`
  );

  const user = userData.rows;

  if (!user.length) {
    return next(new AppError("Oops not found 💁", 404));
  }

  return res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});
