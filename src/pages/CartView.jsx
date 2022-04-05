import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import FilledCart from '../components/cartView/FilledCart';
import EmptyCart from '../components/cartView/EmptyCart';

const CartView = () => {

	const order = useSelector(state => {
		return state.cart.order;
	});
	const user = useSelector(state => {
		return state.user;
	});

	if (!user.user.name) {
		return <Redirect to="/auth" />;
	}
	return (
		<>
			{order.length ? <FilledCart order={order} /> : <EmptyCart />}
		</>
	);
};

export default CartView;