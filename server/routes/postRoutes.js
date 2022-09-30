const express = require("express");
const postController = require("../controllers/postController");
const auth = require("../middleware/auth");

const router = express.Router();

// Upload image to cloudinary
router.post("/uploadImage", postController.uploadImage);

router.delete("/removeImage", postController.removeImage);

// Add posts
router.post("/", auth.protect, postController.createPosts);

module.exports = router;
