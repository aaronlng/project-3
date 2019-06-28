const router = require("express").Router();
const chatController = require("../../controllers/chatController");

// Matches with "/api/message
router.route("/")
    .post(chatController.createMessage)
// .post(chatController.create)

router.route("/:id")
    .get(chatController.findBandMessage)


module.exports = router;
