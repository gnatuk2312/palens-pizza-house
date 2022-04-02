import React from 'react';
import { useInput } from '../../hooks/useInput';


const Register = () => {
	const login = useInput('', { isEmpty: true, isLoginError: true }, 'Логін');
	const password = useInput('', { isEmpty: true }, 'Пароль');
	const name = useInput('', { isEmpty: true }, "Ім'я");
	const surname = useInput('', { isEmpty: true }, "Прізвище");

	return (
		<form className="auth-form">
			<input
				onChange={e => name.onChange(e)}
				onBlur={e => name.onBlur(e)}
				value={name.value}
				className='auth-input'
				type="text" name='name'
				placeholder="Ім'я" />
			{(name.isDirty && login.isEmpty) && <p className='auth-error'>{name.isEmptyText}</p>}
			<input
				onChange={e => surname.onChange(e)}
				onBlur={e => surname.onBlur(e)}
				value={surname.value}
				className='auth-input'
				type="text" name='surname'
				placeholder='Прізвище' />
			{(surname.isDirty && login.isEmpty) && <p className='auth-error'>{surname.isEmptyText}</p>}
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
			<input
				onChange={e => password.onChange(e)}
				onBlur={e => password.onBlur(e)}
				value={password.value}
				className='auth-input'
				type="password"
				name='password'
				placeholder='Пароль' />
			{(password.isDirty && password.isEmpty) && <p className='auth-error'>{password.isEmptyText}</p>}
			<button disabled={!name.inputValid || !surname.inputValid || !login.inputValid || !password.inputValid} className='auth-submit auth-button' type='submit'>Зареєструватись</button>
		</form>
	);
};

export default Register;