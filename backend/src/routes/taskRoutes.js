const router = require("express").Router();
const {
  createTask,
  getTask,
  updateTask,
  deleteTask,
  assignTask,
  removeAssignMember,
} = require("../controllers");
const authenticateMember = require("../middlewares/authenticateMember");

// create Task
router.post("/", authenticateMember, createTask);

// get single Task
router.get("/:id",authenticateMember, getTask);

// update  Task
router.patch("/:boardId/:columnId/:taskId", authenticateMember, updateTask);

// delete Task
router.delete("/:boardId/:columnId/:taskId", authenticateMember,deleteTask);

// assign member
router.patch("/assign/:boardId/", authenticateMember,assignTask);

// remove member
router.delete("/assign/:boardId/", authenticateMember,removeAssignMember);

module.exports = router;
