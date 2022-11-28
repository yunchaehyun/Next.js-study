const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");

const passport = require("passport");
const router = express.Router();
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(403).send(info.reason);
    }
  })(req, res, next);
});

router.post("/", async (req, res, next) => {
  // POST /user/
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send("OK");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
