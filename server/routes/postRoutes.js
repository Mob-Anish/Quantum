const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

// Upload image to cloudinary
router.post("/uploadImage", postController.uploadImage);

module.exports = router;
