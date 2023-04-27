const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(501).json("couldn't register" + error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong Credentials!");

    const encryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const HashedPassword = encryptedPassword.toString(CryptoJS.enc.Utf8);
    HashedPassword !== req.body.password &&
      res.status(501).json("Wrong Credentials!");

    const accesstoken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC
    );

    const { password, ...others } = user._doc;

    res.status(201).json({ ...others, accesstoken });
  } catch (error) {
    res.status(501).json("Error while login " + error);
  }
});

module.exports = router;
