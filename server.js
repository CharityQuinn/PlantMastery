var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

const PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

var databaseUri = 'mongodb://localhost/mongoHeadlines';
// Configure middleware
if(process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}

var dbase = mongoose.connection;
dbase.on("err", function(err) {
  console.log("Mongoose Error: ", err);
});

dbase.once('open', function() {
  console.log("Mongoose connection successful.");
});


// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/proj3PlantMastery", {
  useNewUrlParser: true
});


// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});