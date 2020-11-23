const Board = require("../models/boardModel");

// get all boards created by user
const getBoardCreatedByUser = async (email) => {
  return await Board.findOne({ email: email });
};

const updateTask = async (tasks, taskId) => {
  return await tasks.findOneAndUpdate({ _id: taskId });
};

module.exports = {
  updateTask,
};
