import React from 'react';
import Features from '../features/Features.jsx';
import './whatGPT.css';

const WhatGPT = () => {
	return (
		<div className="gpt__whatgpt section__padding">
			<div className="gpt__whatgpt-features">
				<Features />
			</div>
			<div className="gpt__whatgpt-heading">
				<h1 className="gradient__text">The possibilities are beyond your imagination</h1>
				<p>Explore the Library</p>
			</div>
			<div className="gpt__whatgpt-container">
				<Features />
				<Features />
				<Features />
			</div>
		</div>
	);
};

export default WhatGPT;
