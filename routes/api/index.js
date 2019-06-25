const router = require("express").Router();
const chatRoutes = require("./chat");

// Book routes
router.use("/chat", chatRoutes);

module.exports = router;
