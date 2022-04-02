import { combineReducers } from "redux";

import { pizza } from "./reducers/pizza";
import { cart } from "./reducers/cart";
import { user } from "./reducers/user";

export const rootReducer = combineReducers({
	pizza,
	cart,
	user
})