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



app.get("/scrape", function (req, res) {
  // First, we grab the body of the html with axios
  axios.get("https://www.houseplantsexpert.com/a-z-list-of-house-plants.html").then(function (response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);
    const plantArr = [];
    // Now, we grab every h2 within an plant tag, and do the following:
    $("h1").each(function (i, element) {
      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .children("a")
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");

      plantArr.push(result);
      console.log(plantArr);


    });

    db.plant.create(plantArr)
      .then((dbPlants) => res.json(dbPlants))
      .catch(err => {
        console.log(err);
        res.json(err);
      })

  });
});



// Route for getting all Plants from the db
app.get("/plants", function (req, res) {
  // Grab every document in the Plants collection
  db.Plant.find({})
    .then(function (dbPlant) {
      // If we were able to successfully find Plants, send them back to the client
      res.json(dbPlant);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Route for grabbing a specific Plant by id, populate it with it's note
app.get("/plants/:id", function (req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  db.Plant.findOne({
      _id: req.params.id
    })
    // ..and populate all of the notes associated with it
    .populate("note")
    .then(function (dbPlant) {
      // If we were able to successfully find an Plant with the given id, send it back to the client
      res.json(dbPlant);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});



// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});