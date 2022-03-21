import { LOAD_ALL_PIZZAS } from "../types";

export const loadPizzas = () => {
	return {
		type: LOAD_ALL_PIZZAS
	};
};