import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartButton from '../mainView/CartButton';
import logo from '../../img/svg/pizza-logo.svg'

const Header = () => {

	const { name, surname } = useSelector(state => {
		return state.user.user;
	});

	return (
		<header className="header">
			<div className="container">
				<div className="header__logo">
					<img width="38" src={logo} alt="Pizza logo" />
					<div>
						<a href='/'><h1>Palen`s PizzaHouse</h1></a>
						{(name || surname) ? (
							<div className='header__account'>
								<p className='header__account-name '>{name} {surname}</p>
								<button className='header__logout'>Вийти</button>
							</div>
						) :
							<NavLink className='header__text' to='/auth'>Увійдіть або Зареєструйтесь</NavLink>}
					</div>
				</div>
				<div className='header__buttons'>
					<CartButton />
				</div>
			</div>
		</header>
	);
};

export default Header;