import {combineReducers} from "redux";

import restaurant from "./restaurant/restaurant.reducer";
import image from "./Image/Image.reducer";
import reviews from "./Reviews/review.reducer";
import user from "./User/user.reducer";
import food from "./Food/food.reducer";

const rootReducer = combineReducers({restaurant, image, reviews, user, food });

export default rootReducer;