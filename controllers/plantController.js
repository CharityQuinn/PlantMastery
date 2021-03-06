const db = require("../models");

// Defining methods for the PlantsController
module.exports = {
  findAll: function(req, res) {
    db.Plant
      .find(req.query)
      .sort({ date: -1 })
      .then(dbPlant => res.json(dbPlant))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Plant
      .findById(req.params.id)
      .then(dbPlant => res.json(dbPlant))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    db.Plant.find({plantType: req.params.name})
    .then(dbPlant => res.json(dbPlant))
    .catch(err => res.status(422).json(err));
  },
  savePlant: function(req, res) {
    db.Plant
      .create(req.body)
      .then(dbPlant => res.json(dbPlant))
      .catch(err => res.status(422).json(err));
  },
  put: function(req, res) {
      db.Plant
        .put(req.body)
        .then(dbPlant => res.json(dbPlant))
        .catch(err => res.sttus(422).json(err));
  },
  removePlant: function(req, res) {
    db.Plant
      .findById({ _id: req.params.id })
      .then(dbPlant => dbPlant.remove())
      .then(dbPlant => res.json(dbPlant))
      .catch(err => res.status(422).json(err));
  }
};
