import React from 'react';
import MainView from './pages/MainView';
import CartView from './pages/CartView';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './scss/App.css';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<MainView />
			<CartView />
			<Footer />
		</div>
	);
}

export default App;
