const express = require("express");
const { Usermodel } = require("../Model/user.model");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcrypt");

router.get("/", (req, res, next) => {
  res.send("Hello World");
});

router.post("/register", async (req, res) => {
  const { name, email, pass, age } = req.body;
  try {
    bcrypt.hash(pass, 5, async (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        let user = new Usermodel({ name, email, pass: hash, age });
        await user.save();
        res.send("register success");
      }
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await Usermodel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(pass, user[0].pass, async (err, result) => {
        if (result) {
          const token = jwt.sign({ user: user.name }, "ganesh");
          res.send({ msg: "login success", token: token });
        } else {
          res.send({ msg: "login failed" });
        }
      });
    } else {
      res.send({ msg: "login failed" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  router,
};
