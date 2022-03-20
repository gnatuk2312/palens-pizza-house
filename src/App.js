import React from 'react';
import MainView from './pages/MainView';
import CartView from './pages/CartView';
import EmptyCart from './components/cartView/EmptyCart';
import './scss/app.css';

function App() {
	return (
		<div className="wrapper">
			<MainView />
			<CartView />
			<EmptyCart />
		</div>
	);
}

export default App;
