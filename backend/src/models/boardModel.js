const mongoose = require("mongoose");
const columnModel = require("./columnModel");
const taskSchema = require("./taskModel");
const Schema = mongoose.Schema;
const boardSchema = Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    columns: {
      todo: {
        title: { type: String, default: "To do" },
        tasks: [taskSchema],
      },
      indevelopment: {
        title: { type: String, default: "In Development" },
        tasks: [taskSchema],
      },
      tobereviewed: {
        title: { type: String, default: "To Be Reviewed" },
        tasks: [taskSchema],
      },
      finished: {
        title: { type: String, default: "Finished" },
        tasks: [taskSchema],
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Board", boardSchema);
