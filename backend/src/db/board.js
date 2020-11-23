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
  console.log(id);
  return await Board.findOne({ _id: id });
};

module.exports = {
  getAllBoards,
  createBoard,
  getBoardById,
};
