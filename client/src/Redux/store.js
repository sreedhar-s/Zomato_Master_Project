import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./Reducer/rootReducer";

//redux middlewares
const middlewares = [thunk];

if(process.env.MODE_ENV === "development"){
    const {logger} = require("redux-logger");

    middlewares.push(logger);
}

const Store = createStore(rootReducer, {}, applyMiddleware(...applyMiddleware));

export default Store;