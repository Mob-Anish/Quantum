const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

//Send Verification Email
router.post("/send-verification-email", authController.verifyEmail);

// Google Signup
router.post("/google-authentication", authController.googleAuthentication);

// Create Account
router.post("/register", authController.register);

// Login
router.post("/login", authController.login);

module.exports = router;
