const db = require("../models");
var Sequelize = require("sequelize");

const Op = Sequelize.Op;

module.exports = {
  findmembers: function (req, res) {
    db.members
      .findAll({})
      .then(dbmembers => res.json(dbmembers))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.members
      .findOne({
        where: { id: req.params.id }
      })
      .then(dbmembers => res.json(dbmembers))
      .catch(err => res.status(422).json(err));
  },

  findByName: function (req, res) {
    db.members
      .findAll({
        where: {
          // FirstName: {[Op.like]:`%`+req.params.query+ `%` }
          [Op.or]: [{
            FirstName: { [Op.like]: `%` + req.params.query + `%` }
          }, {
            LastName: { [Op.like]: `%` + req.params.query + `%` }
          }]
        }
      })
      .then(dbmembers => res.json(dbmembers))
      .catch(err => res.status(422).json(err))
  },

  findByGenre: function (req, res) {
    db.members
      .findAll({
        where: {
          genres: { [Op.like]: `%` + req.params.query + `%` }
        }
      })
      .then(dbmembers => res.json(dbmembers))
      .catch(err => res.status(422).json(err))
  },

  create: function (req, res) {
    db.members
      .create(req.body)
      .then(dbmembers => res.json(dbmembers))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.members
      .update({
        where: { id: req.params.id }
      })
      .then(dbmembers => res.json(dbmembers))
      .catch(err => res.status(422).json(err));
  },
  destroy: function (req, res) {
    db.members
      .destroy({
        where: { id: req.params.id }
      })
      .then(dbmembers => res.json(dbmembers))
      .catch(err => res.status(422).json(err));
  }
};
