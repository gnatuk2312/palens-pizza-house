import { ADD_TO_CART, CLEAR_CART, DECREMENT_AMOUNT, DELETE_ITEM_FROM_CART, INCREMENT_AMOUNT } from "../types";


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

		case INCREMENT_AMOUNT:
			return {
				...state,
				amount: state.amount.map(obj => {
					if (obj.id === action.payload) {
						return {
							id: obj.id,
							count: obj.count + 1
						};
					};
					return obj;
				})
			}

		case DECREMENT_AMOUNT:
			return {
				...state,
				amount: state.amount.map(obj => {
					if (obj.id === action.payload) {
						if (obj.count > 1) {
							return {
								id: obj.id,
								count: obj.count - 1
							};
						};
					};
					return obj;
				})
			}

		default:
			return state;
	};
};