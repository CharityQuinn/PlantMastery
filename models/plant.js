const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: { type: String, required: true },
  link: {type: String, required: true},
  waterNeed: {String, required:true},
  sun: { type: Sting, required:true }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
