const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: { type: String, required: true },
  link: {type: String, required: true},
  waterNeed: {type: String, required:true},
  sun: { type: String, required:true }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
