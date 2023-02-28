import React from 'react';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';
import './header.css';
const Header = () => {
	return (
		<div className="gpt__header section__padding" id="home">
			<div className="gpt__header-content">
				<h1 className="gradient__text">Unleash the Power of AI</h1>
				<p>
					Here, we're passionate about all things AI. Whether you're a newcomer to the field or a
					seasoned expert, we have everything you need to learn more about this exciting and
					rapidly-evolving technology.
				</p>

				<div className="gpt__header-content__input">
					<input type="email" placeholder="Your Email Address" />
					<button type="button">Try Now!</button>
				</div>

				<div className="gpt__header-content__people">
					<img src={people} alt="people" />
					<p>1.600 people requested access a visit in last 24 hours</p>
				</div>
			</div>

			<div className="gpt__header-image">
				<img src={ai} alt="ai" />
			</div>
		</div>
	);
};

export default Header;
