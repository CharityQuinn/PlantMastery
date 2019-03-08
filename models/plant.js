const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: { type: String},
  link: {type: String},
  description: {type: String},
  image: {},
  plantType: {type: String}
 
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
