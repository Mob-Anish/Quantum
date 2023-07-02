const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

const router = express.Router();

//Send Verification Email
router.post("/send-verification-email", authController.verifyEmail);

// Google Signup
router.post("/google-authenticate", authController.googleAuthenticate);

// Create Account
router.post("/register", authController.register);

// Login
router.post("/login", authController.login);

// User
router.route("/update/:userId").put(auth.protect, userController.updateUser);

router.route("/:username").get(userController.getUser);

module.exports = router;
