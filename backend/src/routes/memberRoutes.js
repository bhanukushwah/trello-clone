const router = require("express").Router();
const { addMember, removeMember } = require("../controllers");

// add member
router.post("/", addMember);

// remove member
router.delete("/", removeMember);

module.exports = router;
