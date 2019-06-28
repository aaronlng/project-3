const router = require("express").Router();
const chatController = require("../../controllers/chatController");

// Matches with "/api/message
router.route("/")
// .post(chatController.create)

router.route("/:id")
    .post(chatController.createMemberChatroom)


module.exports = router;
