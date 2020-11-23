const Joi = require("joi");

const taskValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().min(5).max(120),
    description: Joi.string().required().min(5).max(800),
    author: Joi.required(),
  });

  return schema.validate(data);
};

module.exports = taskValidation;
