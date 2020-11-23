const { badRequestError, okResponse } = require("../../global_function");
const boardValidation = require("../../services/validations/BoardValidation");
const BoardService = require("../../services/BoardServices");

const createBoard = async (req, res, next) => {
  const board = req.body;
  console.log(board);

  // let validate the data before insert
  const { error } = boardValidation(board);
  if (error) return badRequestError(res, error.details[0].message);

  // create board
  const { code, message, boardCreated } = await BoardService.CreateBoard(board);

  if (code == 200)
    return okResponse(res, boardCreated, "Board successfully created!");

  badRequestError(res, message);
};

const getAllBoards = async (req, res, next) => {
  const boards = await BoardService.getAllBoards();

  okResponse(res, boards, "All boards by this user!");
};

const getBoard = async (req, res, next) => {
  console.log(req);
};

const updateBoard = async (req, res, next) => {
  console.log(req);
};

const deleteBoard = async (req, res, next) => {
  console.log(req);
};

module.exports = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
