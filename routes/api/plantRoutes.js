const router = require("express").Router();
const plantController = require("../../controllers/plantController");

// Matches with "/api/plants"
router.route("/")
  .get(plantController.findAll)
  .post(plantController.savePlant);

router.route("/name/:name")
  .get(plantController.findByName);

// Matches with "/api/plants/:id"
router
  .route("/:id")
  .get(plantController.findById)
  
  
module.exports = router;
