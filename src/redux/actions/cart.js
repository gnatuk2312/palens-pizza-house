import axios from "axios";
import toast from "react-hot-toast";
import { ADD_TO_CART, CLEAR_CART, CLOSE_MODAL, DECREMENT_AMOUNT, DELETE_ITEM_FROM_CART, INCREMENT_AMOUNT, OPEN_MODAL } from "../types";

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

export const openModal = () => {
	return {
		type: OPEN_MODAL
	};
};
export const closeModal = () => {
	return {
		type: CLOSE_MODAL
	};
};

export const makeOrder = (number, name, surname, total, order) => {
	const formData = {
		number,
		name,
		surname,
		total,
		order
	};
	console.log(formData);

	return async dispatch => {
		try {
			await axios.post('/fake-database', { ...formData });
			toast.success("Дякуємо за замовлення, очікуйте дзвінок");
			dispatch(closeModal());
			dispatch(clearCart());
		} catch (e) {
			toast.success("Дякуємо за замовлення, очікуйте дзвінок");
			dispatch(closeModal());
			dispatch(clearCart());
		}
	};
};