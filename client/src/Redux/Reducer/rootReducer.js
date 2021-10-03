import {combineReducers} from "redux";

import restaurant from "./restaurant/restaurant.reducer";
import image from "./Image/Image.reducer";
import reviews from "./Reviews/review.reducer";

const rootReducer = combineReducers({restaurant, image });

export default rootReducer;