const boardQuery = require("../db/board");

const createTask = async ({ boardId, columnId, task }) => {
  try {
    // get the board
    const board = await boardQuery.getBoardById(boardId);

    // get the index in columns array by columnId
    const tasks = await board.columns.id(columnId).tasks;

    await tasks.push(task);
    await board.save();

    return {
      code: 200,
      data: taskCreated,
    };
  } catch (e) {
    return {
      code: 400,
      message: "Error while adding task!",
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
  } catch (e) {
    return {
      code: 400,
      message: "Error while updating tasks!",
    };
  }

  return {
    code: 200,
    data: "jdf",
  };
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
};
