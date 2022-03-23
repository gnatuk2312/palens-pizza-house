import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PizzaBlock from '../components/mainView/PizzaBlock';

const MainView = () => {

	const pizzas = useSelector(state => {
		return state.pizza.pizzas;
	});

	const amount = useSelector(state => {
		return state.cart.amount;
	});

	//Для перевірки що в нас є в state (потім видалити)
	const state = useSelector(state => {
		return state;
	});
	console.log("state >>", state);

	const [activeClass, setActiveClass] = useState(null);

	const filters = ['Піци', 'Напої', 'Десерти'];

	return (
		<div className="content">
			<div className="container">
				<div className="categories">
					<ul>
						<li
							onClick={() => setActiveClass(null)}
							className={activeClass === null ? "active" : ""}
						>Все</li>

						{filters.map((item, index) => {
							return (
								<li
									onClick={() => setActiveClass(index)}
									key={item}
									className={activeClass === index ? "active" : ""}
								>{item}</li>
							)
						})}
					</ul>
				</div>
				<div className="content__items">
					{pizzas.map(item => {
						return (<PizzaBlock key={item.id} pizza={item} amount={amount} />)
					})}
				</div>
			</div>
		</div>
	);
};

export default MainView;