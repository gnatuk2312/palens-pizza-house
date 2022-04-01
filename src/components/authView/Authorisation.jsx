import React from 'react';

const Authorisation = () => {
	return (
		<form className="auth-form">
			<input className='auth-input' type="text" name='login' placeholder='Логін' />
			<p className='auth-error'>Поле Логін не може бути пустим</p>
			<input className='auth-input' type="password" name='password' placeholder='Пароль' />
			<button className='auth-submit auth-button' type='submit'>Увійти</button>
		</form>
	);
};

export default Authorisation;