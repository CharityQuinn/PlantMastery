var axios = require("axios");
var router = require('express').Router();
const cheerio = require('cheerio');
const db = require('../../models');

router.get("/", function (req, res) {
  // First, we grab the body of the html with axios
  axios.get("https://www.houseplantsexpert.com/a-z-list-of-house-plants.html").then(function (response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);

    const results = [];
    // Now, we grab every h2 within an plant tag, and do the following:
    //$("li.simplePagerPage1").each(function (i, element) {
    $("#demoOne1").each(function (i, element) {
      // $("li").each(function(i, element) {
      
      var title = $(element).children('a').text();
      var link = $(element).children().attr("href");
      var image = $(element).children("img-responsive").text();
     
      results.push({
        title: title,
        link: link,
        image: image
      });

    });

    db.Plant.create(results)
      .then((dbPlant) => res.json(dbPlant))
      .catch(err => {
        console.log(err);
        res.json(err);
      })

  });
});



// Route for getting all Plants from the db
router.get("/plant", function (req, res) {
  // Grab every document in the Plants collection
  db.Plant.find({})
    .then(function (dbPlant) {
      res.json(dbPlant);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


module.exports = router;

  
