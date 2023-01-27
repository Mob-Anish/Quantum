const express = require("express");
const postController = require("../controllers/postController");
const auth = require("../middleware/auth");

const router = express.Router();

// Upload image to cloudinary
router.post("/uploadImage", postController.uploadImage);

router.delete("/removeImage", postController.removeImage);

// Add posts
router
  .route("/")
  .get(postController.getAllPosts)
  .post(auth.protect, postController.createPost);

router.route("/:userId").get(postController.getUserPosts);

router.route("/:postId").get(postController.getPost);

module.exports = router;
