import React from "react";
import telegram from '../../img/svg/telegram.svg';
import instagram from '../../img/svg/instagram.svg';
import twitter from '../../img/svg/twitter.svg';
import facebook from '../../img/svg/facebook.svg';


const Footer = () => {
	return (
		<footer className="footer">
			<ul className="social">
				<li><a href="https://web.telegram.org/" target="_blank" rel="noreferrer"><img src={telegram} alt='telegram' /></a></li>
				<li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instagram} alt='instagram' /></a></li>
				<li><a href="https://twitter.com/" target="_blank" rel="noreferrer"><img src={twitter} alt='twitter' /></a></li>
				<li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt='facebook' /></a></li>
			</ul>
			<a className="number" href="tel:+380981312888"><span >+38 (098) 13-12-888</span></a>
			<p className="copyright">© 2022 | All Rights Reserved</p>
		</footer>
	);
};

export default Footer;