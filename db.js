const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://ganesh:ganesh@cluster0.pi6tp68.mongodb.net/Users?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};
