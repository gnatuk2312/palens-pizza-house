import { useEffect, useState } from 'react';

export const useValidation = (value, validations, name) => {

	const [isEmpty, setEmpty] = useState(true);
	const isEmptyText = `Поле ${name} не може бути порожнім`;
	const [minLengthError, setMinLengthError] = useState(false);
	const [isLoginError, setLoginError] = useState(false);

	const [inputValid, setInputValid] = useState(false);

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
					break;

				case 'isEmpty':
					value ? setEmpty(false) : setEmpty(true)
					break;

				case 'isLoginError':
					const re = /^[a-zA-Z0-9]+$/;
					re.test(String(value).toLowerCase()) ? setLoginError(false) : setLoginError(true);
					break;

				default:
					return null;
			}
		}

	}, [value, validations]);

	useEffect(() => {
		if (isEmpty || minLengthError || isLoginError) {
			setInputValid(false);
		} else {
			setInputValid(true);
		}

	}, [isEmpty, minLengthError, isLoginError])

	return {
		isEmpty,
		isEmptyText,
		minLengthError,
		isLoginError,
		inputValid
	};
};