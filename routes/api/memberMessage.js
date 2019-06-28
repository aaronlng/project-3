const router = require("express").Router();
const chatController = require("../../controllers/chatController");

// Matches with "/api/membermessage"
router.route("/")
    .post(chatController.createMemberMessage)
// .post(chatController.create)

router.route("/:id")
    .get(chatController.findMemberMessage)


module.exports = router;
