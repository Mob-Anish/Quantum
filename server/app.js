//---------- Express Framework -----------//
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const hpp = require("hpp");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const compression = require("compression");

const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const AppError = require("./utils/appError");
const globalErrorController = require("./middleware/error");

const app = express();

//---------- GLOBAL MIDDLEWARE -----------//

// Implement CORS
// app.use(cors());
// app.options("*", cors());
// For local development
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Body parser and cookie parser
app.use(express.json());
app.use(cookieParser());

// File parser
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Data Sanitization against xss
app.use(xss());

// Test Middleware
app.use((req, res, next) => {
  console.log("Hello from the server 👋");
  next();
});

//---------- Api Routes ------------//
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

// Handling unhandled request
app.all("*", (req, res, next) => {
  // Sending Error to global middleware
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

//------- GLOBAL ERROR MIDDLEWARE --------//
app.use(globalErrorController);

module.exports = app;
