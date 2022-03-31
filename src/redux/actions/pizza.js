import { FILTER_PRODUCTS_TO_SHOW, LOAD_ALL_PIZZAS, SHOW_ALL_PIZZAS } from "../types";

export const loadPizzas = () => {
	return async dispatch => {
		try {
			const response = await fetch('https://whispering-river-85355.herokuapp.com/api/products');
			const jsonData = await response.json();
			dispatch({
				type: LOAD_ALL_PIZZAS,
				payload: jsonData.products
			});
			dispatch({
				type: SHOW_ALL_PIZZAS
			});
		} catch (err) {
			console.log('errror >>', err);
		}
	};
};

export const filterProducts = (category) => {
	return {
		type: FILTER_PRODUCTS_TO_SHOW,
		payload: category
	}
}