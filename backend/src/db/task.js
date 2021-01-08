const Board = require("../models/boardModel");

const updateTask = async (tasks, taskId) => {
  return await tasks.findOneAndUpdate({ _id: taskId });
};

module.exports = {
  updateTask,
};
