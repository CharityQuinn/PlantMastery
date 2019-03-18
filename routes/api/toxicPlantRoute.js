var axios = require("axios");
var router = require('express').Router();
const cheerio = require('cheerio');
const db = require('../../models');

router.get("/", function (req, res) {
  // First, we grab the body of the html with axios
  axios.get('https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants?field_toxicity_value%5B%5D=01').then(result => {
    const $ = cheerio.load(result.data);

    const toxicDogData = [];

    $('.field-content').each(function(i, element) {
      let toxicType = '';

      
      console.log(toxicType);
      $(element)
        .children('.plant-title-name')
        .each(function(j, div) {
          const toxicInfo = {
            name: $(div)
              .text().trim(),
            link: $(div)
              .find('a')
              .attr('href'),
            image: $(div)
              .find('img')
              .attr('src')
            
          };

          toxicDogData.push(toxicInfo);
        });
    });
    db.Toxic.create(toxicDogData)
      .then(dbToxic => res.json(dbToxic))
      .catch(err => res.json(err));

  });

});


// Route for getting all Toxic Plants from the db
router.get("/toxic", function (req, res) {
  // Grab every document in the Toxic Plants collection
  db.Toxic.find({})
    .then(function (dbToxic) {
      res.json(dbToxic);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


module.exports = router;