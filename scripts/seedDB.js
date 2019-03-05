const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactplantlist"
);

const plantSeed = [
  {
    name: "Cactus",
    image: "../client/public/pexels-photo-1657110.jpeg",
    water: "Bi-Monthly, let dry",
    sun:  "Full sun || LED",
    dirt: "Quick Dry Soil"
  },
  {
    name: "Knife Plant",
    image: "../client/public/KnifePlant.jpeg",
    water: "Weekly, let dry",
    sun:  "Diffuse to full sun",
    dirt: "Potting Soil"
  },
  {
  name: "Aloe",
  image: "../client/public/Aloe.jpeg",
  water: "Bi-Monthly, let dry",
  sun:  "Sun or LED",
  dirt: "Quick Dry Soil"
}
];

db.Plant
  .remove({})
  .then(() => db.Plant.collection.insertMany(plantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });