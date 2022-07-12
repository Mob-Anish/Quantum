// Calling async function and catching error
module.exports = (fn) => {
  return (req, res, next) => {
    // It will pass error using next to the global error handler
    fn(req, res, next).catch(next);
  };
};
