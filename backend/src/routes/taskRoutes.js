const router = require("express").Router();
const {
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers");

const authenticateRoute = require("../middlewares/authenticateRoute");

// create Task
router.post("/", createTask);

// get single Task
router.get("/:id", getTask);

// update existing Task
router.patch("/:boardId/:columnId/:taskId", updateTask);

// delete existing Task
router.delete("/:boardId/:columnId/:taskId", deleteTask);

module.exports = router;
