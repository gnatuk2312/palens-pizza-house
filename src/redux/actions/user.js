import axios from "axios";
import { SET_USER } from '../types'

export const registerUser = (name, surname, login, password) => {
	return async dispatch => {
		try {
			const response = await axios.post('https://whispering-river-85355.herokuapp.com/api/users/signup', {
				"login": login,
				"name": name,
				"surname": surname,
				"password": password
			});

			switch (response.status) {
				case 201:
					dispatch({
						type: SET_USER,
						payload: response.data
					});
					console.log('Succesful REGISTER');
					break;

				default:
					break;
			};

			console.log(response);

		} catch (err) {
			console.log('error while REGISTER >>', err);
		}
	};
};

export const loginUser = (login, password) => {
	return async dispatch => {
		try {
			const response = await axios.post('https://whispering-river-85355.herokuapp.com/api/users/signin', {
				"login": login,
				"password": password
			});

			switch (response.status) {
				case 200:
					dispatch({
						type: SET_USER,
						payload: response.data
					});
					console.log('Succesful LOGIN');
					break;

				default:
					break;
			};

			console.log(response);

		} catch (err) {
			console.log('error while LOGIN >>', err);
		}
	};
};