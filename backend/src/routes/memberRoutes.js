const router = require("express").Router();
const { addMember, getAllMembers, removeMember } = require("../controllers");

// add member
router.post("/", addMember);

// remove member
router.delete("/", removeMember);

// get all members associated with board
router.get("/", getAllMembers);

module.exports = router;
