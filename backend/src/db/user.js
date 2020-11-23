const { object } = require("joi");
const mongoose = require("mongoose");
const User = require("../models/userModel");

// get user by email
const getUserByEmail = async (email) => {
  return await User.findOne({ email: email });
};

// get user by id
const getUserById = async ({ id }) => {
  return await User.findOne({ _id: new mongoose.Types.ObjectId(id) });
};

const addUser = async (user) => {
  return new User(user);
};

module.exports = {
  getUserByEmail,
  addUser,
  getUserById,
};
