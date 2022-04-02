import { SET_USER } from "../types";

const initialState = {
	user: {
		name: '',
		surname: '',
		login: ''
	},
	token: ''
};

export const user = (state = initialState, action) => {
	switch (action.type) {

		case SET_USER:
			return {
				...action.payload
			}

		default:
			return state;
	}
};
