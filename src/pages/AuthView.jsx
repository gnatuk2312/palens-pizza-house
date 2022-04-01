import React, { useState } from 'react';
import Authorisation from '../components/authView/Authorisation';
import Register from '../components/authView/Register';

const AuthView = () => {
	const [currentForm, setCurrentForm] = useState('Вхід');

	const handleClick = e => {
		setCurrentForm(e.target.textContent);
	};

	return (
		<section className="auth">
			<h3 className='auth-title'>Для того щоб перейти у корзину або зробити замовлення увійдіть у свій особистий кабінет</h3>
			<article className="auth-register">
				<nav className='auth-buttons' >
					<button
						className={currentForm === 'Вхід' ? 'auth-button active' : 'auth-button'}
						onClick={handleClick} >Вхід</button>
					<button
						className={currentForm === 'Реєстрація' ? 'auth-button active' : 'auth-button'}
						onClick={handleClick} >Реєстрація</button>
				</nav>
				{currentForm === 'Вхід' ? <Authorisation /> : <Register />}
				<div className='auth-bottom'></div>
			</article>
		</section>
	);
};

export default AuthView;