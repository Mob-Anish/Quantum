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

// Add posts to db.
exports.createPosts = catchAsync(async (req, res, next) => {
  // const { image, title, description } = req.body;
  console.log(req.user);

  // // Inserting post data into the db
  // const postData = await db.query(
  //   `INSERT INTO posts (image, title, description)
  //   VALUES ('${image}', '${title}', '${description}') returning *`
  // );

  // return res.status(201).json({
  //   status: "success",
  //   data: postData.rows[0],
  // });
});
