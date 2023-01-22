const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

//Send Verification Email
router.post("/send-verification-email", authController.verifyEmail);

// Google Signup
router.post("/google-authenticate", authController.googleAuthenticate);

// Create Account
router.post("/register", authController.register);

// Login
router.post("/login", authController.login);

router.route("/:username").get(userController.getUser);

module.exports = router;
