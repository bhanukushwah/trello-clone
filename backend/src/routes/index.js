const router = require("express").Router();

const authRoutes = require("./authRoutes");
const boardRoutes = require("./boardRoutes");
const memberRoutes = require("./memberRoutes");
const taskRoutes = require("./taskRoutes");

router.use("/user", authRoutes);
router.use("/boards", boardRoutes);
router.use("/members", memberRoutes);
router.use("/tasks", taskRoutes);

module.exports = router;
