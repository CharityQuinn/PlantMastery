const db = require('../models');

module.exports = {
  
  findById(req, res) {
    db.Plants.findById(req.params.id)
      .then(dbPlants => res.json(dbPlants))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  getPlants(req, res) {
    db.Plants.create(req.body)
      .then(dbPlants => res.json(dbPlants))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  savePlant(req, res) {
    db.Plants.create(req.body)
      .then(dbPlants => res.json(dbPlants))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  removePlant(req, res) {
    db.Plants.findById(req.params.id)
      .then(dbPlant => dbPlant.remove())
      .then(dbPlant => res.json(dbPlants))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  }
};
