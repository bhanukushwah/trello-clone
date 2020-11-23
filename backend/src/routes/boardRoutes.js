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
router.get("/:id", getBoard);

// update existing board
router.patch(":id", updateBoard);

// delete existing board
router.patch("/:id", deleteBoard);

module.exports = router;
