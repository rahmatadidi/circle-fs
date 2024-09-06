import joi from "joi";

export const createSchema = joi.object({
  image: joi.string(),
  content: joi.string().min(5),
});
