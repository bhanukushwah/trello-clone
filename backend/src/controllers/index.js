const { signup, login } = require("./auth/authController");
const {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
} = require("./board/boardControllers");

const {
  getTask,
  createTask,
  updateTask,
  deleteTask,
  assignTask,
  removeAssignMember,
} = require("./board/taskControllers");

const { addMember, removeMember } = require("./board/memberControllers");

module.exports = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,

  addMember,
  removeMember,

  signup,
  login,

  assignTask,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  removeAssignMember,
};
