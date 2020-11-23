const mongoose = require("mongoose");
const taskSchema = require("./taskModel");

const columnSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      max: 60,
      required: true,
    },
    tasks: [taskSchema],
  },
  { timestamps: true }
);

module.exports = columnSchema;
