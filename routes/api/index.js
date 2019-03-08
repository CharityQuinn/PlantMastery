const router = require("express").Router();
const plantRoutes = require("./plantRoutes"); 
const scrapeRoutes = require("./scrapeRoute")

// Plant routes
router.use("/plants", plantRoutes);
router.use("/scrape", scrapeRoutes);


module.exports = router;