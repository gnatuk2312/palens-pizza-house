import { LOAD_ALL_PIZZAS, SHOW_ALL_PIZZAS, FILTER_PRODUCTS_TO_SHOW } from "../types";

const initialState = {
	products: [],
	pizzas: []
};

export const pizza = (state = initialState, action) => {

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

		case FILTER_PRODUCTS_TO_SHOW:
			return {
				...state,
				pizzas: state.products.filter(item => item.category === action.payload)
			}

		default:
			return state;
	};

};