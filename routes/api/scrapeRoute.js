var axios = require("axios");
var router = require('express').Router();
const cheerio = require('cheerio');
const db = require('../../models');

router.get("/", function (req, res) {
  // First, we grab the body of the html with axios
  axios.get('https://www.houseplantsexpert.com/a-z-list-of-house-plants.html').then(result => {
    const $ = cheerio.load(result.data);

    const plantData = [];

    $('.mylist ul').each(function(i, element) {
      let plantType = '';

      switch ($(element).attr('id')) {
        case 'demoOne1':
          plantType = 'Flowering House Plants';
          break;
        case 'demoOne2':
          plantType = 'Foliage Type Plants';
          break;
        case 'demoOne3':
          plantType = 'Succulents and Cacti';
          break;
        default:
          plantType = '';
          break;
      }
      console.log(plantType);
      $(element)
        .children('li')
        .each(function(j, li) {
          const plantInfo = {
            name: $(li)
              .find('a')
              .text().trim(),
            link: $(li)
              .find('a')
              .attr('href'),
            description: $(li).text().trim(),
            image: $(li)
              .find('img')
              .attr('src'),
            plantType: plantType
          };

          plantData.push(plantInfo);
          db.Plant.create(plantData);
        });
    });
    console.log(plantData);
    res.json(plantData);

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