import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PizzaBlock from '../components/mainView/PizzaBlock';
import LoaderBlock from '../components/mainView/LoaderBlock';
import { filterProducts } from '../redux/actions/pizza';
import { SHOW_ALL_PIZZAS } from '../redux/types';

const loaderArray = [1, 2, 3, 4, 5, 6, 7, 8];

const MainView = () => {

	const dispatch = useDispatch();
	const filters = ['Піци', 'Напої', 'Десерти'];


	useEffect(() => {
		dispatch({ type: SHOW_ALL_PIZZAS });
	}, [dispatch]);

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

	const handleClickOnFilters = (index, item) => {
		setActiveClass(index);
		if (item === 'Піци') {
			dispatch(filterProducts("pizza"))
		};
		if (item === 'Напої') {
			dispatch(filterProducts("drink"))
		};
		if (item === 'Десерти') {
			dispatch(filterProducts("dessert"))
		};
	};
	const handleClickOnAllButton = () => {
		setActiveClass(null);
		dispatch({ type: SHOW_ALL_PIZZAS });
	};

	return (
		<section className="content">
			<div className="container">
				<div className="categories">
					<ul>
						<li
							onClick={handleClickOnAllButton}
							className={activeClass === null ? "active" : ""}
						>Все</li>

						{filters.map((item, index) => {
							return (
								<li
									onClick={() => handleClickOnFilters(index, item)}
									key={item}
									className={activeClass === index ? "active" : ""}
								>{item}</li>
							)
						})}
					</ul>
				</div>
				<div className="content__items">
					{pizzas.length ? (pizzas.map(item => {
						return (<PizzaBlock key={item._id} pizza={item} amount={amount} />)
					})) : (
						loaderArray.map(i => {
							return (<LoaderBlock key={i} />)
						})
					)}
				</div>
			</div>
		</section>
	);
};

export default MainView;