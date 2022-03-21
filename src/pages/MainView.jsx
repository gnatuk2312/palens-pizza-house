import React, { useState } from 'react';
import PizzaBlock from '../components/mainView/PizzaBlock';

const MainView = () => {

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