const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");

// Matches with "/api/plants"
router.route("/")
  .get(plantsController.findAll)
  .post(plantsController.create);

// Matches with "/api/plants/:id"
router
  .route("/:id")
  .get(plantsController.findById)
  .put(plantsController.update)
  
module.exports = router;
