import { ADD_TO_CART, CLEAR_CART, DECREMENT_AMOUNT, DELETE_ITEM_FROM_CART, INCREMENT_AMOUNT } from "../types";

export const addToCart = (item) => {
	return {
		type: ADD_TO_CART,
		payload: item
	};
};

export const clearCart = () => {
	return {
		type: CLEAR_CART
	};
};

export const deleteItemFromCart = (id) => {
	return {
		type: DELETE_ITEM_FROM_CART,
		payload: id
	}
}

export const incrementAmount = (id) => {
	return {
		type: INCREMENT_AMOUNT,
		payload: id
	};
};

export const decrementAmount = (id) => {
	return {
		type: DECREMENT_AMOUNT,
		payload: id
	};
};