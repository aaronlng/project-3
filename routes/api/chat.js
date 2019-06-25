const router = require("express").Router();
const chatController = require("../../controllers/chatController");

// Matches with "/api/chat
router.route("/")
  .get(chatController.findTest)
  // .post(chatController.create)

// Matches with api/chat/:id
router
  .route("/:id")
  .get(chatController.findByID)

module.exports = router;
