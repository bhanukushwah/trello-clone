const router = require("express").Router();
const { addMember, removeMember, searchMember } = require("../controllers");

// add member
router.post("/", addMember);

// search member
router.get("/search", searchMember);

// remove member
router.delete("/", removeMember);

module.exports = router;
