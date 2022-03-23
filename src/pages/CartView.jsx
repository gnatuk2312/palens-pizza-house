import React from 'react';
import { useSelector } from 'react-redux';

import FilledCart from '../components/cartView/FilledCart';
import EmptyCart from '../components/cartView/EmptyCart';

const CartView = () => {

	const order = useSelector(state => {
		return state.cart.order;
	});

	return (
		<>
			{order.length ? <FilledCart order={order} /> : <EmptyCart />}
		</>
	);
};

export default CartView;