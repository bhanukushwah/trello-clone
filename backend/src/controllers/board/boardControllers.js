const {
  badRequestError,
  okResponse,
  noContentResponse,
  notFoundError,
} = require("../../global_function");

const boardValidation = require("../../services/validations/BoardValidation");
const BoardService = require("../../services/BoardServices");

const createBoard = async (req, res, next) => {
  const { title } = req.body;
  const { id } = req.user;

  // let validate the data before insert
  const { error } = boardValidation({ title, owner: id });
  if (error) return badRequestError(res, error.details[0].message);

  // create board
  const { code, message, data } = await BoardService.CreateBoard({
    title: title,
    owner: id,
  });

  if (code == 200) return okResponse(res, data, "Board successfully created!");

  badRequestError(res, message);
};

const getAllBoards = async (req, res, next) => {
  const { id } = req.user;
  const { code, message, data } = await BoardService.getAllBoards(id);

  if (code == 200) return okResponse(res, data, "All boards by this user!");

  badRequestError(res, message);
};

const getBoard = async (req, res, next) => {
  const { boardId } = req.params;

  const { code, message, data } = await BoardService.getBoard(boardId);

  if (code == 200) return okResponse(res, data, "Successfully get the board!");

  badRequestError(res, message);
};

const updateBoard = async (req, res, next) => {
  const { boardId } = req.params;
  const { title } = req.body;
  console.log(boardId);

  const { code, message, data } = await BoardService.updateBoard(
    boardId,
    title
  );

  if (code == 200) return okResponse(res, data, "Successfully get the board!");

  badRequestError(res, message);
};

const deleteBoard = async (req, res, next) => {
  const { boardId } = req.params;
  const { code, message } = await BoardService.deleteBoard(boardId);

  if (code) return notFoundError(res, "Board doesn't exist with this boardId");

  if (code == 200)
    return noContentResponse(res, "Board deleted successfully created!");

  badRequestError(res, message);
};

module.exports = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
