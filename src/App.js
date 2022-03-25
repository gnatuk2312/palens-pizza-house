import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainView from './pages/MainView';
import CartView from './pages/CartView';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './scss/App.css';

import { useDispatch, useSelector } from 'react-redux';
import { loadPizzas } from './redux/actions/pizza';

function App() {

	const store = useSelector(state => {
		return state;
	})
	useEffect(() => {
		localStorage.setItem('order', JSON.stringify(store.cart.order));
		localStorage.setItem('amount', JSON.stringify(store.cart.amount));
	}, [store]);


	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadPizzas());
	}, [dispatch]);

	return (
		<div className="wrapper">
			<Header />
			<Switch>
				<Route path='/cart' component={CartView} />
				<Route path='/' component={MainView} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
