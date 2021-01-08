const router = require("express").Router();
const {
  createBoard,
  getAllBoards,
  getBoard,
  updateBoard,
  deleteBoard,
} = require("../controllers");

const authenticateMember = require("../middlewares/authenticateMember");

// create board
router.post("/", authenticateMember, createBoard);

// get all boards associated with user
router.get("/", authenticateMember, getAllBoards);

// get single board
router.get("/:boardId", authenticateMember, getBoard);

// update existing board
router.patch("/:boardId", authenticateMember, updateBoard);

// delete existing board
router.delete("/:boardId", authenticateMember, deleteBoard);

module.exports = router;
