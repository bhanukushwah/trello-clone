const boardQuery = require("../db/board");
const user = require("../db/user");
const userQuery = require("../db/user");

const addMembers = async ({ boardId, members }) => {
  try {
    // get the board
    const board = await boardQuery.getBoardById(boardId);

    // loop through the members array and add push member to the board
    members.map(async (member) => {
      await board.members.push(member);
    });

    await board.save();
  } catch (e) {
    return {
      code: 400,
      message: "Error while adding members!",
    };
  }

  return {
    code: 200,
    data: members,
  };
};

const searchMembers = async (email) => {
  try {
    const data = await userQuery.getUsersByEmail(email);
    return {
      code: 200,
      data: data,
    };
  } catch (e) {
    return {
      code: 400,
      message: "Error while removing member!",
    };
  }
};

const removeMember = async ({ boardId, memberId }) => {
  try {
    // get the board
    const board = await boardQuery.getBoardById(boardId);

    // find the index with the memberid
    const index = board.members.findIndex((e) => e == memberId);

    // if index not found throw error
    if (index == -1)
      return {
        code: 400,
        message: "Member not exist!",
      };

    // if no error then remove the element of index
    const member = await board.members.splice(index, 1);
    await board.save();

    return {
      code: 200,
      data: member,
    };
  } catch (e) {
    return {
      code: 400,
      message: "Error while removing member!",
    };
  }
};

module.exports = {
  addMembers,
  removeMember,
  searchMembers,
};
