import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../../hooks/useInput';
import { closeModal, makeOrder } from '../../redux/actions/cart';


const MakeOrder = (props) => {
	const dispatch = useDispatch();

	const state = useSelector(state => {
		return state;
	});

	const handleClose = () => {
		dispatch(closeModal());
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(makeOrder(
			phone.value,
			state.user.user.name,
			state.user.user.surname,
			props.total,
			state.cart.amount
		));
	}

	const phone = useInput('+380', { isPhoneError: true }, "Мобільний номер");

	return (
		<section className='order '>
			<div className='order-container'>
				<div onClick={handleClose} className="close"></div>
				<div className='order-top'>Palen`s PizzaHouse</div>
				<form onSubmit={handleSubmit} className="order-form">
					<h3 className='order-text'>Дякуємо що обрали нашу піцерію, Гнат! Залиште свій номер щоб наш кур'єр зміг зв'язатись з вами...</h3>
					<input
						onChange={e => phone.onChange(e)}
						onBlur={e => phone.onBlur(e)}
						value={phone.value}
						className='order-input'
						type="text"
						name='number'
						placeholder='Номер телефону' />
					{(phone.isDirty && phone.isPhoneError) && <p className='order-error'>Введіть номер у вигляді +380123456789</p>}
					<button disabled={!phone.inputValid} className='order-submit' type='submit'>Надіслати</button>
				</form>
				<div className='order-bottom'></div>
			</div>
		</section>
	);
};

export default MakeOrder;