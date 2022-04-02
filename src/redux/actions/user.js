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
			}).catch(e => {
				throw e;
			});

			if (response.status === 201) {
				dispatch({
					type: SET_USER,
					payload: response.data
				});
				console.log('Succesful REGISTER');
			}

			console.log(response);

		} catch (err) {
			const error = Number(err.message.substring(err.message.length - 3, err.message.length));
			console.log(error);

			switch (error) {
				case 400:
					console.log('Bad Request');
					break;

				case 404:
					console.log('Bad path in request');
					break;

				case 404:
					console.log('Login in use');
					break;

				case 500:
					console.log('problems in server');
					break;

				default:
					break;
			};
		}
	};
};

export const loginUser = (login, password) => {
	return async dispatch => {
		try {
			const response = await axios.post('https://whispering-river-85355.herokuapp.com/api/users/signin', {
				"login": login,
				"password": password
			}).catch(e => {
				throw e;
			});

			if (response.status === 200) {
				dispatch({
					type: SET_USER,
					payload: response.data
				});
				console.log('Succesful LOGIN');
			};

			console.log(response);

		} catch (err) {
			const error = Number(err.message.substring(err.message.length - 3, err.message.length));
			console.log(error);

			switch (error) {
				case 400:
					console.log('Bad Request');
					break;

				case 401:
					console.log('Wrong Password or login');
					break;

				case 404:
					console.log('Bad path in request');
					break;

				case 500:
					console.log('problems in server');
					break;

				default:
					break;
			};
		}
	};
};