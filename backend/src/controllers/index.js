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
} = require("./board/taskControllers");

const {
  addMember,
  removeMember,
  getAllMembers,
} = require("./board/memberControllers");

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

  getAllMembers,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
