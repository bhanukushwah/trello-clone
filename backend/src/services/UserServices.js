const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { getUserByEmail, addUser } = require("../db/user");
const query = require("../db/user");
const { to } = require("../global_function");

const SignUp = async (user) => {
  const { username, email, password } = user;

  // check if the user already exist
  const emailExist = await getUserByEmail(email);
  if (emailExist) return { code: 400, message: "Email already exist!" };

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // creating a new user
  const newUser = await addUser({
    username: username,
    email: email,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();

  if (!savedUser) return { code: 400, message: "Error while adding the user!" };

  // create and assign token
  const token = jwt.sign(
    { id: savedUser._id, email: savedUser.email, username: savedUser.username },
    process.env.TOKEN_SECRET,
    {
      expiresIn: "3600s",
    }
  );

  return {
    code: 200,
    data: {
      user: savedUser.username,
      token: token,
    },
  };
};

const LogIn = async (user) => {
  const { email, password } = user;

  // check if the user already exist
  const existingUser = await query.getUserByEmail(email);
  if (!existingUser)
    return { code: 400, message: "Email or password is wrong!" };

  // if password is correct
  const validPass = await to(bcrypt.compare(password, existingUser.password));
  if (!validPass) return { code: 400, message: "Email or password is wrong!" };

  // if password is valid create and assign token
  const token = jwt.sign(
    {
      id: existingUser._id,
      email: existingUser.email,
      username: existingUser.username,
    },
    process.env.TOKEN_SECRET,
    {
      expiresIn: "3600s",
    }
  );

  return { code: 200, data: { user: existingUser.username, token: token } };
};

module.exports = {
  SignUp,
  LogIn,
};
