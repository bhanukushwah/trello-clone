const router = require("express").Router();

const { signup, login } = require("../controllers/");

// signup
router.post("/signup", signup);

// login
router.post("/signin", login);

module.exports = router;
