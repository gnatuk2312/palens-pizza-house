import React from 'react';
import FilledCart from '../components/cartView/FilledCart';
import EmptyCart from '../components/cartView/EmptyCart'

const CartView = () => {
	return (
		<>
			<FilledCart />
			<EmptyCart />
		</>
	);
};

export default CartView;