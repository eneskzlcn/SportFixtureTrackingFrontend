import { createStore } from "redux";
import { reducers } from "./reducers";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
const store = createStore(reducers,applyMiddleware(thunk)); // we can add , and middleware while fetching.

export default store;