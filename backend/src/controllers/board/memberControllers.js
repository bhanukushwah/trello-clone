const MemberService = require("../../services/MemberServices");
const {
  badRequestError,
  createdResponse,
  noContentResponse,
} = require("../../global_function");

const addMember = async (req, res, next) => {
  const { boardId, members } = req.body;

  const { code, data, message } = await MemberService.addMembers({
    boardId,
    members,
  });

  if (code == 400) return badRequestError(res, message);

  createdResponse(res, data, "members successfully added");
};

const removeMember = async (req, res, next) => {
  console.log(req.body);
  const { memberId, boardId } = req.body;

  const { code, data, message } = await MemberService.removeMember({
    boardId,
    memberId,
  });

  if (code == 400) return badRequestError(res, message);

  noContentResponse(res, "member removed successfully!");
};

module.exports = {
  addMember,
  removeMember,
};
