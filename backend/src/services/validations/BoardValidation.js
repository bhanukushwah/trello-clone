const Joi = require("joi");

const boardValidation = (data) => {
  const schema = Joi.object({
    owner: Joi.required(),
    title: Joi.string().required().min(3).max(120),
  });

  return schema.validate(data);
};

module.exports = boardValidation;
