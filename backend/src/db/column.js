const Column = require("../models/columnModel");

const createColumn = async (column) => {
  const columnCreated = await new Column(column);
  return await columnCreated.save();
};

module.exports = {
  createColumn,
};
