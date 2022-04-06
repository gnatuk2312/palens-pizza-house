import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MainView from './pages/MainView';
import CartView from './pages/CartView';
import AuthView from './pages/AuthView';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './scss/App.css';

import { useDispatch, useSelector } from 'react-redux';
import { loadPizzas } from './redux/actions/pizza';
import { currentUser } from './redux/actions/user';

function App() {

	const store = useSelector(state => {
		return state;
	})
	useEffect(() => {
		localStorage.setItem('order', JSON.stringify(store.cart.order));
		localStorage.setItem('amount', JSON.stringify(store.cart.amount));
		localStorage.setItem('token', JSON.stringify(store.user.token));
	}, [store]);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadPizzas());
		if (store.user.token) {
			dispatch(currentUser(store.user.token));
		};
	}, [dispatch]);

	return (
		<div className="wrapper">
			<Header />
			<Toaster position="bottom-center" toastOptions={{ duration: 5000, className: 'toaster' }} />
			<Switch>
				<Route path='/cart' component={CartView} />
				<Route path='/auth' component={AuthView} />
				<Route path='/' component={MainView} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
