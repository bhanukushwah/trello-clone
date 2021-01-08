const boardQuery = require("../db/board");

const createTask = async ({ boardId, columnId, task, userId }) => {
  try {
    // get the board
    const board = await boardQuery.getBoardById(boardId);
    // get the index in columns array by columnId
    const tasks = await board.columns[columnId].tasks;
    await tasks.push({
      author: userId,
      title: task.title,
      description: task.description,
    });

    const taskCreated = await board.save();

    return {
      code: 200,
      data: taskCreated,
    };
  } catch (e) {
    return {
      code: 400,
      message: "Error while adding task!",
      error: e,
    };
  }
};

const deleteTask = async ({ boardId, columnId, taskId }) => {
  try {
    // get the board
    const board = await boardQuery.getBoardById(boardId);

    // get the index in columns array by columnId
    const tasks = await board.columns.id(columnId).tasks;

    const taskIndex = tasks.findIndex((e) => e.id == taskId);

    // if no error then remove the element of index
    const taskDeleted = await tasks.splice(taskIndex, 1);

    await board.save();

    return {
      code: 200,
      data: taskDeleted,
    };
  } catch (e) {
    return {
      code: 400,
      message: "Error while deleting task!",
    };
  }
};

const updateTask = async ({ boardId, columnId, taskId, task }) => {
  try {
    // get the board
    const board = await boardQuery.getBoardById(boardId);

    // get the index in columns array by columnId
    const tasks = await board.columns.id(columnId).tasks;

    const taskIndex = tasks.findIndex((e) => e.id == taskId);

    tasks[taskIndex].title = task.title;
    tasks[taskIndex].description = task.description;
    tasks[taskIndex].author = task.author;

    await board.save();

    return {
      code: 200,
      data: board,
    };
  } catch (e) {
    return {
      code: 400,
      message: "Error while updating tasks!",
    };
  }
};

const assignTask = async ({ boardId, columnId, taskId, members }) => {
  try {
    // get the board
    const board = await boardQuery.getBoardById(boardId);

    // get the index in columns array by columnId
    const tasks = await board.columns[columnId].tasks;

    const taskIndex = tasks.findIndex((e) => e.id == taskId);

    const assignedTo = tasks[taskIndex].assignedTo;

    // loop through the members array and add push member to the board
    members.map(async (member) => {
      await assignedTo.push(member);
    });

    await board.save();

    return {
      code: 200,
      data: "Success",
    };
  } catch (e) {
    return {
      code: 400,
      message: "Error while updating tasks!",
    };
  }
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  assignTask,
};
