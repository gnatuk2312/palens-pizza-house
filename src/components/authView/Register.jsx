import React from 'react';

const Register = () => {
	return (
		<form className="auth-form">
			<input className='auth-input' type="text" name='name' placeholder="Ім'я" />
			<p className='auth-error'>Поле Ім'я не може бути пустим</p>
			<input className='auth-input' type="text" name='surname' placeholder='Прізвище' />
			<input className='auth-input' type="text" name='login' placeholder='Логін' />
			<input className='auth-input' type="password" name='password' placeholder='Пароль' />
			<button className='auth-submit auth-button' type='submit'>Зареєструватись</button>
		</form>
	);
};

export default Register;