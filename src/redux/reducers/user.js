import { SET_USER, DELETE_USER } from "../types";

const initialState = {
	user: {
		name: '',
		surname: '',
		login: ''
	},
	token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : ""
};

export const user = (state = initialState, action) => {
	switch (action.type) {

		case SET_USER:
			return {
				...action.payload
			}
		case DELETE_USER:
			localStorage.setItem('token', '');
			return {
				token: '',
				user: { name: '', surname: '', login: '' }
			}

		default:
			return state;
	}
};
