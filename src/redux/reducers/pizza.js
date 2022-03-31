import { LOAD_ALL_PIZZAS, SHOW_ALL_PIZZAS } from "../types";

const initialState = {
	products: [],
	pizzas: []
};

export const pizza = (state = initialState, action) => {

	console.log('reducer>>', action);

	switch (action.type) {
		case LOAD_ALL_PIZZAS:
			return {
				...state,
				products: action.payload
			}

		case SHOW_ALL_PIZZAS:
			return {
				...state,
				pizzas: state.products
			}

		default:
			return state;
	};

};