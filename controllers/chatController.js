const db = require("../models");

module.exports = {

  createMessage: function (req, res) {
    //to Message is for band
    console.log("inside create message")
    db.Message.create(req.body)
      .then(dbMessage => res.json(dbMessage))
      .catch(err => res.status(422).json(err));
  },

  findBandMessage: function (req, res) {
    console.log(req.params.id)
    db.Message
      .findAll(
        {
          where: { ChatroomId: req.params.id },
        }
      )
      .then(dbchatroom => res.json(dbchatroom))
      .catch(err => res.status(422).json(err));
  },

  createMemberMessage: function (req, res) {
    console.log("creating member message")
    console.log(req.body.MemberChatroomId)
    db.MemberMessage.create(req.body)
      .then(dbMemMessage => res.json(dbMemMessage))
      .catch(err => res.status(422).json(err));
  },

  findMemberMessage: function (req, res) {
    console.log("finding member message")
    db.MemberMessage
      .findAll(
        {
          where: { MemberChatroomId: req.params.id },
        }
      )
      .then(dbchatroom => res.json(dbchatroom))
      .catch(err => res.status(422).json(err));
  },



};
