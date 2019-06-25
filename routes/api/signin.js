const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../../models");

process.env.SECRET_KEY = "secret";

module.exports = () => {
  router.post("/signup", (req, res) => {
    const { body } = req;
    const memberData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      bio: req.body.bio,
      experience: req.body.experience,
      email: req.body.email,
      password: req.body.password
    };

    db.members
      .findOne({
        where: {
          email: memberData.email
        }
      })
      .then(member => {
        if (!member) {
          const hash = bcrypt.hashSync(memberData.password, 10);
          memberData.password = hash;
          db.members
            .create(memberData)
            .then(member => {
              let token = jwt.sign(member.dataValues, process.env.SECRET_KEY, {
                expiresIn: 1500
              });
              res.json({ token: token });
            })
            .catch(err => {
              res.send("error: " + err);
            });
        }
      });
  });

  router.post("/login", (req, res) => {
    db.members
      .findOne({
        where: {
          email: req.body.email
        }
      })
      .then(member => {
        if (bcrypt.compareSync(req.body.password, member.password)) {
          let token = jwt.sign(member.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1500
          });
          res.json({ token: token });
        } else {
          res.send({
            success: false,
            message: "user does not exist"
          });
        }
      })
      .catch(err => {
        res.send("err: " + err);
      });
  });

  router.get("/profile", (req, res) => {
    const decoded = jwt.verify(
      req.headers["authorization"],
      process.env.SECRET_KEY
    );

    db.members
      .findOne({
        where: {
          id: decoded.id
        }
      })
      .then(member => {
        if (member) {
          res.json(member);
        }
      })
      .catch(err => {
        res.send("err" + err);
      });
  });
};
