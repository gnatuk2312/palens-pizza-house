import React from 'react';
import PizzaBlock from '../components/mainView/PizzaBlock';

const MainView = () => {
	return (
		<div className="content">
			<div className="container">
				<div className="categories">
					<ul>
						<li className="active">Все</li>
						<li>Піци</li>
						<li>Напої</li>
						<li>Десерти</li>
					</ul>
				</div>
				<div className="content__items">
					<PizzaBlock />
					<PizzaBlock />
					<PizzaBlock />
					<PizzaBlock />
					<PizzaBlock />
					<PizzaBlock />
					<PizzaBlock />
					<PizzaBlock />
					<PizzaBlock />
					<PizzaBlock />
				</div>
			</div>
		</div>
	);
};

export default MainView;