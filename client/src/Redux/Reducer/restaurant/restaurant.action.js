import axios from "axios";

//redux types
import { GET_RESTAURANT } from "./restaurant.type";

export const getRestaurant = () => async (dispatch) => {
  try {
    const restaurantlist = await axios({
      method: "GET",
      url: "http://localhost:4000/restaurant/?city=Guntakal",
    });

    return dispatch({ type: GET_RESTAURANT, payload: restaurantlist.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};