const {
  badRequestError,
  okResponse,
  noContentResponse,
} = require("../../global_function");
const taskValidation = require("../../services/validations/TaskValidation");
const TaskService = require("../../services/TaskServices");

const createTask = async (req, res, next) => {
  const { task, boardId, columnId } = req.body;
  const { id } = req.user;

  // let validate the data before insert
  const { error } = taskValidation(task);
  if (error) return badRequestError(res, error.details[0].message);

  // create task
  const { code, message, taskCreated } = await TaskService.createTask({
    boardId,
    columnId,
    task,
    userId: id,
  });

  if (code == 200)
    return okResponse(res, taskCreated, "Task successfully created!");

  badRequestError(res, message);
};

const getTask = async (req, res, next) => {
  console.log(req);
};

const updateTask = async (req, res, next) => {
  const { boardId, columnId, taskId } = req.params;
  const { task } = req.body;

  // let validate the data before insert
  const { error } = taskValidation(task);
  if (error) return badRequestError(res, error.details[0].message);

  // create task
  const { code, message, taskUpdated } = await TaskService.updateTask({
    boardId,
    columnId,
    task,
    taskId,
  });

  if (code == 200)
    return okResponse(res, taskUpdated, "Task successfully created!");

  badRequestError(res, message);
};

const deleteTask = async (req, res, next) => {
  const { boardId, columnId, taskId } = req.params;

  // delete task
  const { code, message, data } = await TaskService.deleteTask({
    boardId,
    columnId,
    taskId,
  });

  if (code == 200) return noContentResponse(res, "Task Deleted Successfully");

  badRequestError(res, message);
};

const assignTask = async (req, res, next) => {
  const { boardId } = req.params;
  const { members, columnId, taskId } = req.body;

  const { code, data, message } = await TaskService.assignTask({
    boardId,
    columnId,
    taskId,
    members,
  });

  if (code == 200) return okResponse(res, data, "members successfully added");
  badRequestError(res, message);
};

const removeAssignMember = async (req, res, next) => {
  const { boardId } = req.params;
  const { members, columnId, taskId } = req.body;

  const { code, data, message } = await TaskService.assignTask({
    boardId,
    columnId,
    taskId,
    members,
  });

  if (code == 200) return okResponse(res, data, "members successfully added");
  badRequestError(res, message);
};

module.exports = {
  getTask,
  createTask,
  updateTask,
  deleteTask,
  assignTask,
  removeAssignMember,
};
