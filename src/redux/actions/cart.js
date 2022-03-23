import { ADD_TO_CART, CLEAR_CART } from "../types";

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