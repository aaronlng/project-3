const db = require("../models");

module.exports = {
  findmembers: function(req, res) {
    db.members
      .findAll({})
      .then(dbmembers => res.json(dbmembers))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.members
      .findOne({
        where: { id: req.params.id }
      })
      .then(dbmembers => res.json(dbmembers))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.members
      .create(req.body)
      .then(dbmembers => res.json(dbmembers))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.members
      .update({
        where: { id: req.params.id }
      })
      .then(dbmembers => res.json(dbmembers))
      .catch(err => res.status(422).json(err));
  },
  destroy: function(req, res) {
    db.members
      .destroy({
        where: { id: req.params.id }
      })
      .then(dbmembers => res.json(dbmembers))
      .catch(err => res.status(422).json(err));
  }
};
