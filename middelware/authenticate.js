const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "ganesh", (err, decoded) => {
      if (decoded) {
        next();
      } else {
        res.send("Please Login");
      }
    });
  } else {
    res.send("Please Login");
  }
};

module.exports = {
  authenticate,
};
