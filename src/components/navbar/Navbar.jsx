import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/ai-logo.svg';
import './navbar.css';
const Menu = () => (
	<>
		<p>
			<a href="#home">Introduction</a>
		</p>
		<p>
			<a href="#wgpt">What is AI?</a>
		</p>
		<p>
			<a href="#applications">Applications of AI</a>
		</p>
		<p>
			<a href="#ethics">AI Ethics and Governance</a>
		</p>
		<p>
			<a href="#trends"> AI News and Trends</a>
		</p>
	</>
);
const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div className="gpt__navbar">
			<div className="gpt__navbar-links">
				<div className="gpt__navbar-links_logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="gpt__navbar-links_container">
					<Menu />
				</div>
			</div>
			<div className="gpt__navbar-sign">
				<p>Sign in</p>
				<button type="button" className="button">
					Sign up
				</button>
			</div>
			<div className="gpt__navbar-menu">
				{toggleMenu ? (
					<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
				) : (
					<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
				)}
				{toggleMenu && (
					<div className="gpt__navbar-menu_container scale-up-center">
						<div className="gpt__navbar-menu_container-links">
							<Menu />
							<div className="gpt__navbar-menu_container-links-sign">
								<p>Sign in</p>
								<button type="button" className="button">
									Sign up
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
