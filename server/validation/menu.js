import joi from "joi";

export const validatefoodId = (foodId) => {
  const Schema = joi.object({
    _id:joi.string().required(),
  });

  return Schema.validateAsync(foodId);
};

export const validateImageId = (imageId) => {
  const Schema = joi.object({
    _id:joi.string().required(),
  });

  return Schema.validateAsync(imageId);
};