import React from 'react';
import { useDispatch } from 'react-redux';
import { useInput } from '../../hooks/useInput';
import { loginUser } from '../../redux/actions/user';

const Authorisation = () => {
	const login = useInput('', { isEmpty: true, minLength: 6, isLoginError: true }, 'Логін');
	const password = useInput('', { isEmpty: true, minLength: 6 }, 'Пароль');

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginUser(login.value, password.value));
	}

	return (
		<form onSubmit={handleSubmit} className="auth-form">
			<input
				onChange={e => login.onChange(e)}
				onBlur={e => login.onBlur(e)}
				value={login.value}
				className='auth-input'
				type="text"
				name='login'
				placeholder='Логін' />
			{(login.isDirty && login.isEmpty) && <p className='auth-error'>{login.isEmptyText}</p>}
			{(login.isDirty && login.isLoginError) && <p className='auth-error'>Тільки латинські букви та цифри</p>}
			{(login.isDirty && login.minLengthError) && <p className='auth-error'>Логін повинен містити більше 6 символів</p>}
			<input
				onChange={e => password.onChange(e)}
				onBlur={e => password.onBlur(e)}
				value={password.value}
				className='auth-input'
				type="password"
				name='password'
				placeholder='Пароль' />
			{(password.isDirty && password.isEmpty) && <p className='auth-error'>{password.isEmptyText}</p>}
			{(password.isDirty && password.minLengthError) && <p className='auth-error'>Пароль повиннен містити більше 6 символів</p>}
			<button disabled={!login.inputValid || !password.inputValid} className='auth-submit auth-button' type='submit'>Увійти</button>
		</form>
	);
};

export default Authorisation;