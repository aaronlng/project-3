const router = require("express").Router();
const bandController = require("../../controllers/bandController");


// Matches with api/membername
router
    .route("/:query")
    .get(bandController.findByGenre)

module.exports = router;
