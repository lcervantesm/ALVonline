const router = require("express").Router();
const itemsRoutes = require("./items");

// Book routes
router.use("/items", itemsRoutes);

module.exports = router;