const router = require("express").Router();
const bandController = require("../../controllers/bandController");

// Matches with "/api/chat
router.route("/")
    .get(bandController.findBands)

// Matches with api/chat/:id
router
    .route("/:id")
    .get(bandController.findById)

module.exports = router;
