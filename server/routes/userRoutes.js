const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

//Send Verification Email
router.post("/send-verification-email", authController.verifyEmail);

// Create Account
router.post("/register", authController.register);

module.exports = router;
