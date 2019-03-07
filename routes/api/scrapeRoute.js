var express = require("express");

var app = express();

app.get("/scrape", function (req, res) {
  // First, we grab the body of the html with axios
  axios.get("https://www.houseplantsexpert.com/indoor-and-house-plants-care-guides.html").then(function (response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);
    const plantArr = [];
    // Now, we grab every h2 within an plant tag, and do the following:
    $("mylist").each(function (i, element) {
      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .find(li)
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


  
