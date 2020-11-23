const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 5,
      max: 240,
    },
    description: {
      type: String,
      min: 10,
      max: 800,
    },
    assigned: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = taskSchema;
