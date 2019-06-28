const db = require("../models");

module.exports = {

  createPost: function (req, res) {
    //to Message is for band
    console.log("inside create message")
    db.post.create(req.body)
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  },

  getPost: function (req, res) {
    db.post
      .findAll({})
         .then(dbPost => res.json(dbPost))
        .catch(err => res.status(422).json(err));
  },
};
