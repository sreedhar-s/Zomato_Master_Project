import joi from "joi";

export const validateReviewData = (reviewData) => {
  const Schema = joi.object({
    rating:joi.number().required(),
    reviewText:joi.string().required(),
    isRestaurantReview:joi.boolean(),
    isFoodRevi:joi.boolean(),
  });

  return Schema.validateAsync(reviewData);
};

export const validateFoodId = (foodId) => {
    const Schema = joi.object({
      _id:joi.string().required(),
    });
  
    return Schema.validateAsync(foodId);
};

