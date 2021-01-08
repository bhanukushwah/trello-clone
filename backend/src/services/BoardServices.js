const boardQuery = require("../db/board");
const { getUserById } = require("../db/user");
const { to } = require("../global_function");

const CreateBoard = async (board) => {
  console.log(board);
  try {
    //create a board
    const newBoard = await boardQuery.createBoard(board);

    // get the owner
    const user = await getUserById({ id: board.owner });

    user.boards.push(newBoard);
    user.save();

    // add user to board member
    newBoard.members.push(user.id);

    const addedBoard = await newBoard.save();

    return {
      code: 200,
      data: addedBoard,
    };
  } catch (e) {
    return {
      code: 400,
      message: "Error while creating board",
    };
  }
};

const getAllBoards = async (userId) => {
  try {
    const boards = await boardQuery.getAllBoards(userId);

    console.log(boards);

    return {
      code: 200,
      data: boards,
    };
  } catch (e) {
    if (e) {
      return {
        code: 400,
        message: "Error while getting boards",
      };
    }
    console.log(result);
  }
};

const getBoard = async (boardId) => {
  const [error, result] = await to(boardQuery.getBoardById(boardId));

  if (result == null)
    return {
      code: 404,
      message: "Board doesn't exist!",
    };

  if (error) {
    return {
      code: 400,
      message: "Error while getting board",
    };
  }

  return {
    code: 200,
    data: result,
  };
};

const deleteBoard = async (boardId) => {
  const [error, result] = await to(boardQuery.deleteBoardById(boardId));

  if (error == null)
    return {
      code: 400,
      message: "Board doesn't exist!",
    };

  if (error)
    return {
      code: 400,
      message: "Error while deleting board",
    };

  return {
    code: 200,
    data: result,
  };
};

const updateBoard = async (boardId, title) => {
  const [error, result] = await to(boardQuery.updateBoard(boardId, title));

  if (result == null)
    return {
      code: 400,
      message: "Board doesn't exist!",
    };

  if (error)
    return {
      code: 400,
      message: "Error while deleting board",
    };

  return {
    code: 200,
    data: result,
  };
};

module.exports = {
  CreateBoard,
  getAllBoards,
  getBoard,
  deleteBoard,
  updateBoard,
};
