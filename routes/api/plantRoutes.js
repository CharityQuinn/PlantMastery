const router = require("express").Router();
const plantController = require("../../controllers/plantController");

// Matches with "/api/plants"
router.route("/")
  .get(plantController.findAll)
  .post(plantController.create);

// Matches with "/api/plants/:id"
router
  .route("/:id")
  .get(plantController.findById)
  .put(plantController.update)
  
module.exports = router;
