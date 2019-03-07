const router = require("express").Router();
const plantRoutes = require("./plantRoutes");

// Plant routes
router.use("/plants", plantRoutes);

module.exports = router;