import React from 'react';
import ethics from '../../assets/possibility.png';
import './ethics.css';

const Ethics = () => {
	return (
		<div className="gpt__ethics section__padding" id="ethics">
			<div className="gpt__ethics-image">
				<img src={ethics} alt="ethics" />
			</div>
			<div className="gpt__ethics-content">
				<h4>Unleash the Power of AI</h4>
				<h1 className="gradient__text">AI Ethics and Governance</h1>
				<p>
					As AI becomes more ubiquitous, it's important to consider the ethical and social
					implications of its development and deployment. At our site, we're committed to exploring
					the ethical and governance issues surrounding AI, and providing resources and information
					to help ensure that AI is developed and used in responsible and equitable ways.
				</p>
				<h4>Explore AI and Its Applications</h4>
			</div>
		</div>
	);
};

export default Ethics;
