const db = require("../models");

module.exports = {
  findTest: function (req, res) {
    console.log("inside controller")
    db.members.findAll({})
      .then(dbchatroom => res.json(dbchatroom))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Chatroom.create()
  },

  findByID: function (req, res) {
    db.Chatroom
      .findOne(
        {
          where: { id: req.body.id },
          include: [db.Message],
        }
      )
      .then(dbchatroom => res.json(dbchatroom))
      .catch(err => res.status(422).json(err));
  },
};
