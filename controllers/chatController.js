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
    db.Message
      .findAll(
        {
          // where: { ChatroomId: req.body.id },
        }
      )
      .then(dbchatroom => res.json(dbchatroom))
      .catch(err => res.status(422).json(err));
  },

  createMemberMessage: function(req,res){

  }
};
