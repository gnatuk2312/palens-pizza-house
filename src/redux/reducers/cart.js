import { ADD_TO_CART } from "../types";


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

		default:
			return state;
	};
};