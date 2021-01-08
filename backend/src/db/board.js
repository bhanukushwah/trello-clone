const Board = require("../models/boardModel");
const User = require("../models/userModel");

// get all boards created by user
const getBoardCreatedByUser = async (email) => {
  return await Board.findOne({ email: email });
};

const getAllBoards = async (id) => {
  const boards = await User.findOne({ _id: id }).populate("boards", [
    "boards",
    "title",
  ]);
  return boards.boards;
};

const createBoard = async (board) => {
  return await new Board(board);
};

const getBoardById = async (id) => {
  return await await Board.findOne({ _id: id });
};

const deleteBoardById = async (id) => {
  return await Board.findByIdAndDelete(id);
};

const updateBoard = async (boardId, title) => {
  return await Board.updateOne({ _id: boardId }, { $set: { title: title } });
};

module.exports = {
  getAllBoards,
  createBoard,
  getBoardById,
  deleteBoardById,
  updateBoard,
};
