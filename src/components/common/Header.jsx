import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartButton from '../mainView/CartButton';
import logo from '../../img/svg/pizza-logo.svg'
import { logoutUser } from '../../redux/actions/user';

const Header = () => {

	const user = useSelector(state => {
		return state.user;
	});

	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(logoutUser(user.token))
	};


	return (
		<header className="header">
			<div className="container">
				<div className="header__logo">
					<img width="38" src={logo} alt="Pizza logo" />
					<div>
						<a href='/'><h1>Palen`s PizzaHouse</h1></a>
						{(user.user.name || user.user.surname) ? (
							<div className='header__account'>
								<p className='header__account-name '>{user.user.name} {user.user.surname}</p>
								<button onClick={handleClick} className='header__logout'>Вийти</button>
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