const catchAsync = require("../utils/catchAsync");
const cloudinary = require("../utils/cloudinary");
const AppError = require("../utils/appError");
const db = require("../database");

// Uploading image to cloudinary
exports.uploadImage = catchAsync(async (req, res, next) => {
  const file = req.files.file;

  // If there is no file selected
  if (!file) return next(new AppError("Please select your image 😅", 400));

  //Check file type (only image)
  if (!file.mimetype.startsWith("image"))
    return next(
      new AppError("Your file is not supported in the system 😅", 400)
    );

  // Check file size
  if (!file.size > process.env.IMAGE_UPLOAD_SIZE)
    return next(
      new AppError("Please upload images with less or equal to 10mb 😅", 400)
    );

  // Uploading image to cloudinary
  const image = await cloudinary.uploader.upload(file.tempFilePath, {
    folder: "imageCover",
  });

  if (image)
    return res.status(200).json({
      status: "success",
      data: image,
    });
});

// Remove image from cloudinary
exports.removeImage = catchAsync(async (req, res, next) => {
  const imageId = req.body.imageID;

  await cloudinary.uploader.destroy(imageId);

  return res.status(204).json({
    status: "success",
    data: null,
  });
});

// Add post to db.
exports.createPost = catchAsync(async (req, res, next) => {
  const { title, description, photo } = req.body;

  // Getting user id
  const user_id = req.user.id;

  // Inserting post data into the db
  const postData = await db.query(
    `INSERT INTO posts (title, description, photo, user_id)
    VALUES ('${title}', '${description}', '${photo}', '${user_id}') returning *`
  );

  return res.status(201).json({
    status: "success",
    data: postData.rows[0],
  });
});

// Get all posts from DB.
exports.getAllPosts = catchAsync(async (req, res, next) => {
  const postsData = await db.query(`SELECT * FROM posts`);

  const posts = postsData.rows;

  return res.status(200).json({
    status: "success",
    results: posts.length,
    data: {
      posts,
    },
  });
});

// Get posts from specific userId.
exports.getUserPosts = catchAsync(async (req, res, next) => {
  const userId = req.params.userId;

  const postsData = await db.query(
    `SELECT * FROM posts WHERE user_id = ${userId}`
  );

  const posts = postsData.rows;

  if (!posts.length) {
    return res.status(200).json({
      status: "success",
      data: null,
    });
  }

  return res.status(200).json({
    status: "success",
    results: posts.length,
    data: {
      posts,
    },
  });
});
