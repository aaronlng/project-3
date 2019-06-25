const router = require("express").Router();
const memberController = require("../../controllers/memberController");


// Matches with api/membername
router
    .route("/:query")
    .get(memberController.findByGenre)

module.exports = router;
