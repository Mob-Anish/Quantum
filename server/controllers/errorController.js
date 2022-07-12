// For Development Environment
const sendErrorDev = (err, req, res) => {
  // A) API'S ERROR
  if (req.originalUrl.startsWith("/api")) {
    console.error("ERROR", err);
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  // B) PROVIDE ERROR RESPONSE TO CLIENT
  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

// For Production Environment: Standard procedures
const sendErrorProd = (err, req, res) => {
  // A) APIS ERROR
  if (req.originalUrl.startsWith("/api")) {
    // I) Operational, trusted error
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }

    // II) Programming or other unknown error: don't want to leak details to the client
    // 1) Log error
    console.error("ERROR 💥", err);
    // 2) Send generic message
    return res.status(500).json({
      status: "error",
      message: "Something went very wrong!!",
    });
  }

  // B) RENDER ERROR INFORMATION IN WEBSITES
  // I) Operational, trusted error
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  // II) Programming or other unknown error: don't want to leak details to the client
  // 1) Log error
  console.error("ERROR 💥", err);
  // 2) Send generic message
  return res.status(err.statusCode).json({
    status: err.status,
    message: "Please try again later.",
  });
};

//-------- GLOBAL ERROR HANDLER -------//
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") sendErrorDev(err, req, res);
  if (process.env.NODE_ENV === "production") sendErrorProd(err, req, res);
};
