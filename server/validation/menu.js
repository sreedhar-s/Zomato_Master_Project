import joi from "joi";

export const validatemenuId = (restaurantObj) => {
  const Schema = joi.object({
    city:joi.string().required(),
  });

  return Schema.validateAsync(restaurantObj);
};