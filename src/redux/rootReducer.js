import { combineReducers } from "redux";

import { pizza } from "./reducers/pizza";
import { cart } from "./reducers/cart";

export const rootReducer = combineReducers({
	pizza,
	cart
})