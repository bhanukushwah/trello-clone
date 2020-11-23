const router = require("express").Router();
const {
  createTask,
  getTask,
  updateTask,
  deleteTask,
  assignTask,
  removeAssignMember,
} = require("../controllers");

const authenticateRoute = require("../middlewares/authenticateRoute");

// create Task
router.post("/", createTask);

// get single Task
router.get("/:id", getTask);

// update  Task
router.patch("/:boardId/:columnId/:taskId", updateTask);

// delete Task
router.delete("/:boardId/:columnId/:taskId", deleteTask);

// assign member
router.patch("/assign/:boardId/", assignTask);

// remove member
router.delete("/assign/:boardId/", removeAssignMember);

module.exports = router;
