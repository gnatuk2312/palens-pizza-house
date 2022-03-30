import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cart";

const PizzaBlock = ({ pizza, amount }) => {

	const [openedDescription, setOpenedDescription] = useState(false);
	const bindDescription = () => {
		setOpenedDescription(!openedDescription);
	};

	const dispatch = useDispatch();
	const addItemToCart = () => {
		dispatch(addToCart(pizza))
	};

	return (
		<article className="pizza-block">
			<div>
				<div className="pizza-block__image-wrapper">
					<img
						className="pizza-block__image"
						src={pizza.imageUrl}
						alt={pizza.name}
					/>
				</div>
				<h4 className="pizza-block__title">{pizza.name}</h4>
				<div className='pizza-block__description'>
					<div
						onClick={bindDescription}
						className={openedDescription ? "pizza-block__arrow active" : "pizza-block__arrow"}>
						<span>Детально</span>
					</div>
					<CSSTransition
						in={openedDescription}
						classNames='description'
						timeout={500}
					>
						<p className='pizza-block__description-text'>
							{pizza.description}
						</p>
					</CSSTransition>
				</div>
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">{pizza.price} ₴</div>
				<div
					onClick={addItemToCart}
					className="button button--outline button--add">
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавити</span>
					{amount.map(item => {
						if (item.id === pizza.id) {
							return <i key={item.id}>{item.count}</i>;
						}; return null;
					})}
				</div>
			</div>
		</article>
	);
};
export default PizzaBlock;