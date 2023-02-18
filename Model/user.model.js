const mongoose = require("mongoose");

const USerSchem = mongoose.Schema(
  {
    name: String,
    email: String,
    pass: String,
    age: Number,
  },
  {
    versionKey: false,
  }
);

const Usermodel = mongoose.model("users", USerSchem);

module.exports = {
  Usermodel,
};
