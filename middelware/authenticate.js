const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "ganesh", (err, decoded) => {
      if (decoded) {
        req.body.userId = decoded.AuthId;
        // console.log(decoded);
        next();
      } else {
        res.send("Please Login T");
      }
    });
  } else {
    res.send("Please Login");
  }
};

module.exports = {
  authenticate,
};
