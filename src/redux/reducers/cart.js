import { ADD_TO_CART, CLEAR_CART, DELETE_ITEM_FROM_CART } from "../types";


const initialState = {
	order: []
}

export const cart = (state = initialState, action) => {

	switch (action.type) {

		case ADD_TO_CART:
			return {
				...state,
				order: [action.payload, ...state.order]
			}

		case CLEAR_CART:
			return {
				...state,
				order: []
			}

		case DELETE_ITEM_FROM_CART:
			return {
				...state,
				order: state.order.filter(item => item.id !== action.payload)
			}

		default:
			return state;
	};
};