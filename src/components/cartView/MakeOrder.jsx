import React from 'react';
import { useInput } from '../../hooks/useInput';


const MakeOrder = () => {

	const phone = useInput('+380', { isPhoneError: true }, "Мобільний номер");

	return (
		<section className='order '>
			<div className='order-container'>
				<div className="close"></div>
				<div className='order-top'>Palen`s PizzaHouse</div>
				<form className="order-form">
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
					<button disabled={!phone.inputValid || phone.isPhoneError} className='order-submit' type='submit'>Надіслати</button>
				</form>
				<div className='order-bottom'></div>
			</div>
		</section>
	);
};

export default MakeOrder;