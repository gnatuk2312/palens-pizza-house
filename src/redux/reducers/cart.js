import { ADD_TO_CART, CLEAR_CART, DELETE_ITEM_FROM_CART } from "../types";


const initialState = {
	order: [],
	amount: []
}

export const cart = (state = initialState, action) => {

	switch (action.type) {

		case ADD_TO_CART:
			if (state.amount.find(item => item.id === action.payload.id)) {
				return {
					...state,
					amount: state.amount.map(item => {
						if (item.id === action.payload.id) {
							return {
								id: item.id,
								count: item.count + 1
							}
						} else {
							return item;
						}
					})
				}
			} else {
				return {
					...state,
					order: [action.payload, ...state.order],
					amount: [...state.amount, { id: action.payload.id, count: 1 }]
				}
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