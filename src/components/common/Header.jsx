import React from 'react';
import CartButton from '../mainView/CartButton';
import logo from '../../img/svg/pizza-logo.svg'

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<a href='/' className="header__logo">
					<img width="38" src={logo} alt="Pizza logo" />
					<div>
						<h1>Palen`s PizzaHouse</h1>
						<p>найсмачніша піца у Всесвіті</p>
					</div>
				</a>
				<CartButton />
			</div>
		</header>
	);
};

export default Header;