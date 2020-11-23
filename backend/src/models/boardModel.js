const mongoose = require("mongoose");
const columnModel = require("./columnModel");
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
    columns: [columnModel],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Board", boardSchema);
