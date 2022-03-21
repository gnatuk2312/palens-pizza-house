import React from 'react';
import MainView from './pages/MainView';
import CartView from './pages/CartView';
import Header from './components/Header';
import './scss/App.css';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<MainView />
			<CartView />
		</div>
	);
}

export default App;
