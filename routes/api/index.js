const router = require("express").Router();
const chatRoutes = require("./chat");
const memberRoutes = require("./member")
const bandRoutes = require("./band")
const memberNameRoutes = require("./memberName")
const memberGenreRoutes = require("./memberGenre")
const bandNameRoutes = require("./bandName");
const bandGenreRoutes = require("./bandGenre");

// Book routes
router.use("/chat", chatRoutes);
router.use("/member",memberRoutes);
router.use("/band",bandRoutes);
router.use("/membername",memberNameRoutes);
router.use("/membergenre", memberGenreRoutes);
router.use("/bandname",bandNameRoutes);
router.use("/bandgenre",bandGenreRoutes);

module.exports = router;

