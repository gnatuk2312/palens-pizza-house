import { LOAD_ALL_PIZZAS, SHOW_ALL_PIZZAS } from "../types";

export const loadPizzas = () => {
	return async dispatch => {
		try {
			const response = await fetch('https://whispering-river-85355.herokuapp.com/api/products');
			console.log('response >>', response);

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