const db = require("../models");

module.exports = {
  findBands: function(req, res) {
    db.bands
      .findAll({})
      .then(dbBands => res.json(dbBands))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.bands
      .findOne({
        where: { id: req.params.id }
      })
      .then(dbBands => res.json(dbBands))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.bands
      .create(req.body)
      .then(dbBands => res.json(dbBands))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.bands
      .update({
        where: { id: req.params.id }
      })
      .then(dbBands => res.json(dbBands))
      .catch(err => res.status(422).json(err));
  },
  destroy: function(req, res) {
    db.bands
      .destroy({
        where: { id: req.params.id }
      })
      .then(dbBands => res.json(dbBands))
      .catch(err => res.status(422).json(err));
  }
};
