const router = require("express").Router();
const {
  createBoard,
  getAllBoards,
  getBoard,
  updateBoard,
  deleteBoard,
} = require("../controllers");
const authenticateRoute = require("../middlewares/authenticateRoute");

// create board
router.post("/", createBoard);

// get all boards associated with user
router.get("/", getAllBoards);

// get single board
router.get("/:boardId", getBoard);

// update existing board
router.patch("/:boardId", updateBoard);

// delete existing board
router.delete("/:boardId", deleteBoard);

module.exports = router;
