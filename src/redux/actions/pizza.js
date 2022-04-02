import axios from "axios";
import { FILTER_PRODUCTS_TO_SHOW, LOAD_ALL_PIZZAS, SHOW_ALL_PIZZAS } from "../types";
import toast from "react-hot-toast";

export const loadPizzas = () => {
	return async dispatch => {
		try {
			const response = await axios.get('https://whispering-river-85355.herokuapp.com/api/products');
			dispatch({
				type: LOAD_ALL_PIZZAS,
				payload: response.data.products
			});
			dispatch({
				type: SHOW_ALL_PIZZAS
			});
		} catch (err) {
			toast.error(`Помилка у завантаженні елементів з бази даних. Деталі: ${err}`);
		}
	};
};

export const filterProducts = (category) => {
	return {
		type: FILTER_PRODUCTS_TO_SHOW,
		payload: category
	}
}