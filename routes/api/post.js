const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/post
router.route("/")
    .get(postController.getPost)
    .post(postController.createPost)


module.exports = router;
