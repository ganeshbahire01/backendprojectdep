const express = require("express");
const { Usermodel } = require("../Model/user.model");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Hello World");
});

router.post("/register", async (req, res) => {
  try {
    let user = new Usermodel(req.body);
    await user.save();
    res.send("register success");
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
    try {
        const user = await Usermodel.find({
            email: req.body.email,
            pass: req.body.pass,
        });
    const token= jwt.sign({user:user.name},"ganesh")
    res.send({"msg":"login success","token":token});
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  router,
};
