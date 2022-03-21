import { LOAD_ALL_PIZZAS } from "../types";
import { pizzas } from "../../db_pizzas";

const initialState = {
	pizzas: []
};

export const pizza = (state = initialState, action) => {

	console.log('reducer>>', action);

	switch (action.type) {
		case LOAD_ALL_PIZZAS:
			return {
				...state,
				pizzas: pizzas
			}
		default:
			return state;
	};

};