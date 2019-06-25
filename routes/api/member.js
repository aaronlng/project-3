const router = require("express").Router();
const memberController = require("../../controllers/memberController");

// Matches with "/api/member
router.route("/")
    .post(memberController.create)
    .get(memberController.findmembers)

// Matches with api/member/:id
router
    .route("/:id")
    .get(memberController.findById)

router
    .route("/name")
    .get(memberController.findmembers)

module.exports = router;
