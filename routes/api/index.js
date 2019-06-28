const router = require("express").Router();
const chatRoutes = require("./chat");
const memberRoutes = require("./member");
const bandRoutes = require("./band");
const memberNameRoutes = require("./memberName");
const memberGenreRoutes = require("./memberGenre");
const bandNameRoutes = require("./bandName");
const bandGenreRoutes = require("./bandGenre");
const messageRoutes = require("./message")
const postRoutes = require("./post")
const memberMessageRoutes = require("./memberMessage")
const memberChatroomRoutes = require("./memberChatroom")
const bandChatroomRoutes = require("./bandChatroom")

router.use("/chat", chatRoutes);
router.use("/member", memberRoutes);
router.use("/band", bandRoutes);
router.use("/membername", memberNameRoutes);
router.use("/membergenre", memberGenreRoutes);
router.use("/bandname", bandNameRoutes);
router.use("/bandgenre", bandGenreRoutes);
router.use("/message", messageRoutes);
router.use("/post", postRoutes);
router.use("/membermessage", memberMessageRoutes)
router.use("/memberchatroom", memberChatroomRoutes)
router.use("/bandchatroom", bandChatroomRoutes)




module.exports = router;
