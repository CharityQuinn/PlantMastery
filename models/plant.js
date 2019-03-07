const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: { type: String},
  link: {type: String}
  // watering: String,
  // lighting: {type: String, required:true }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
