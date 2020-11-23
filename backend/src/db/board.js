const Board = require("../models/boardModel");

// get all boards created by user
const getBoardCreatedByUser = async (email) => {
  return await Board.findOne({ email: email });
};

const getAllBoards = async () => {
  return await Board.find();
};

const createBoard = async (board) => {
  return await new Board(board);
};

const getBoardById = async (id) => {
  return await Board.findOne({ _id: id });
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
