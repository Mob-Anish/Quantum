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

// Update User details
exports.updateUser = catchAsync(async (req, res, next) => {
  const userId = req.params.userId;

  const { name, username, email, tagline, photo } = req.body;

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

  // Update user data
  const updatedUserData = await db.query(
    `UPDATE users SET name = '${name}', username = '${username}', email = '${email}', photo = '${photo}', tagline = '${tagline}'
     WHERE id = '${userId}' returning *`
  );

  const user = updatedUserData.rows;

  if (!user.length) {
    return next(new AppError("User not found💁", 401));
  }

  return res.status(200).json({
    status: "success",
    data: {
      updatedUserData,
    },
  });
});

// Delete User
exports.deleteUser = catchAsync(async (req, res, next) => {
  const userId = req.params.userId;

  const userData = await db.query(
    `DELETE FROM users WHERE userId = '${userId}'`
  );

  const user = userData.rows;

  if (!user.length) {
    return next(new AppError("User not found💁", 401));
  }

  return res.status(200).json({
    status: "success",
    data: null,
  });
});
