const { badRequestError, okResponse } = require("../../global_function");
const UserService = require("../../services/UserServices");

const {
  loginValidation,
  signupValidation,
} = require("../../services/validations/UserValidation");

const signup = async (req, res) => {
  const user = req.body;

  // let validate the data before insert
  const { error } = signupValidation(user);
  if (error) return badRequestError(res, error.details[0].message);

  // add user to db
  const { code, message, data } = await UserService.SignUp(user);

  if (code === 400) return badRequestError(res, message);

  okResponse(res, data, "User successfully created!");
};

const login = async (req, res) => {
  const user = req.body;

  // let validate the data
  const { error } = loginValidation(user);
  if (error) return badRequestError(res, error.details[0].message);

  // validate user
  const { code, message, data } = await UserService.LogIn(user);

  if (code === 400) return badRequestError(res, message);

  okResponse(res, data, "Login Successfuly!");
};

module.exports = {
  signup,
  login,
};
