const db = require("../models");
var Sequelize = require("sequelize");

const Op = Sequelize.Op;

module.exports = {
  findBands: function (req, res) {
    db.bands
      .findAll({})
      .then(dbBands => res.json(dbBands))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.bands
      .findOne({
        where: { id: req.params.id }
      })
      .then(dbBands => res.json(dbBands))
      .catch(err => res.status(422).json(err));
  },

  findByName: function (req, res) {
    db.bands
      .findAll({
        where: {
          bandName: { [Op.like]: `%` + req.params.query + `%` }
        }
      })
      .then(dbbands => res.json(dbbands))
      .catch(err => res.status(422).json(err))
  },

  findByGenre: function (req, res) {
    db.bands
      .findAll({
        where: {
          genres: { [Op.like]: `%` + req.params.query + `%` }
        }
      })
      .then(dbbands => res.json(dbbands))
      .catch(err => res.status(422).json(err))
  },


  create: function (req, res) {
    db.bands
      .create(req.body)
      .then(dbBands => res.json(dbBands))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    db.bands
      .update({
        where: { id: req.params.id }
      })
      .then(dbBands => res.json(dbBands))
      .catch(err => res.status(422).json(err));
  },
  destroy: function (req, res) {
    db.bands
      .destroy({
        where: { id: req.params.id }
      })
      .then(dbBands => res.json(dbBands))
      .catch(err => res.status(422).json(err));
  }
};
