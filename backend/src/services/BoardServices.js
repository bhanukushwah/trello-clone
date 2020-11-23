const boardQuery = require("../db/board");
const { getUserById } = require("../db/user");
const { to } = require("../global_function");

const CreateBoard = async (board) => {
  try {
    //create a board
    const newBoard = await boardQuery.createBoard(board);

    // get the owner
    const user = await getUserById({ id: board.owner });

    user.boards.push(newBoard);
    user.save();

    // add user to board member
    newBoard.members.push(user.id);

    // add predefined columns
    newBoard.columns.push({
      title: "To Do",
      tasks: [],
    });

    newBoard.columns.push({
      title: "In Development",
      tasks: [],
    });

    newBoard.columns.push({
      title: "To Be Reviewed",
      tasks: [],
    });

    newBoard.columns.push({
      title: "Finished",
      tasks: [],
    });

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

const getAllBoards = async () => {
  const [error, result] = await to(boardQuery.getAllBoards());

  if (error) {
    return {
      code: 400,
      message: "Error while getting boards",
    };
  }

  return {
    code: 200,
    data: result,
  };
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
