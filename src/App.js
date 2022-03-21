import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainView from './pages/MainView';
import CartView from './pages/CartView';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './scss/App.css';

function App() {
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
