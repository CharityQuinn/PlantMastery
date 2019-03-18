const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toxicSchema = new Schema({
  name: { type: String},
  link: {type: String},
 
 
});

const Toxic = mongoose.model("Toxic", toxicSchema);

module.exports = Toxic;
