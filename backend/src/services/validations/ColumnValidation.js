const Joi = require("joi");

const columnValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().min(5).max(60),
  });

  return schema.validate(data);
};
