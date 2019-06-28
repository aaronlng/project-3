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
    db.MemberMessage.create(req.body)
      .then(dbMemMessage => res.json(dbMemMessage))
      .catch(err => res.status(422).json(err));
  },

  findMemberMessage: function (req, res) {
    db.MemberMessage
      .findAll(
        {
          where: { MemberChatroomId: req.params.id },
        }
      )
      .then(dbchatroom => res.json(dbchatroom))
      .catch(err => res.status(422).json(err));
  },

  createMemberChatroom: function (req, res) {
    db.MemberChatroom
      .create(
        {
          memberId: req.params.id
        }
      )
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err))
  },

  createBandChatroom: function (req, res) {
    console.log("creating band chatroom" + req.params.id)
    db.Chatroom
      .create(
        {
          bandId: req.params.id
        }
      )
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err))
  }
};
