const catchAsync = require("../utils/catchAsync");
const cloudinary = require("../utils/cloudinary");
const AppError = require("../utils/appError");

// Uploading image to cloudinary
exports.uploadImage = catchAsync(async (req, res, next) => {
  const file = req.files.file;

  // If there is no file selected
  if (!file) next(new AppError("Please select your image 😅", 400));

  //Check file type (only image)
  if (!file.mimetype.startsWith("image"))
    return res.status(400).json({
      status: "fail",
      fileType: "Hmm you uploaded wrong file🤕",
    });

  // Uploading image to cloudinary
  const image = await cloudinary.uploader.upload(file.tempFilePath, {
    folder: "imageCover",
  });

  // Sending image url from cloudinary
  if (image)
    return res.status(200).json({
      status: "success",
      data: image.url,
    });
});
