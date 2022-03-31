import { ADD_TO_CART, CLEAR_CART, DECREMENT_AMOUNT, DELETE_ITEM_FROM_CART, INCREMENT_AMOUNT } from "../types";


const initialState = {
	order: localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : [],
	amount: localStorage.getItem('amount') ? JSON.parse(localStorage.getItem('amount')) : []
}

export const cart = (state = initialState, action) => {

	switch (action.type) {

		case ADD_TO_CART:
			if (state.amount.find(item => item._id === action.payload._id)) {
				return {
					...state,
					amount: state.amount.map(item => {
						if (item._id === action.payload._id) {
							return {
								...item,
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
					amount: [...state.amount, { _id: action.payload._id, count: 1, price: action.payload.price }]
				}
			}


		case CLEAR_CART:
			return {
				...state,
				order: [],
				amount: []
			}

		case DELETE_ITEM_FROM_CART:
			return {
				...state,
				order: state.order.filter(item => item._id !== action.payload),
				amount: state.amount.filter(item => item._id !== action.payload)
			}

		case INCREMENT_AMOUNT:
			return {
				...state,
				amount: state.amount.map(obj => {
					if (obj._id === action.payload) {
						return {
							...obj,
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
					if (obj._id === action.payload) {
						if (obj.count > 1) {
							return {
								...obj,
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