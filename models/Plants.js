var mongoose = require("mongoose");

//save a reference to the Schema constructor
var Schema = mongoose.Schema;

//using the Schema constructor, create a new userSchema object similar to a Sequelize model
var PlantSchema = new Schema({
  //"title" is quired and of type String
  title: {
    type: String,
    required: true
  },
  //"link" is required and of type String
  link: {
    type: String,
    required: true
  },
  //"note" is an object that stores a note id. The ref property lins the object id to the Note model
  note: {
    type: Schema.Types.ObjectId, 
    ref: "Note"
  }
});

//this creates our model from the above schema, using mongoose's model method
var Plant = mongoose.model("Plant", PlantSchema);

//export the Plant model
module.exports = Plant;
