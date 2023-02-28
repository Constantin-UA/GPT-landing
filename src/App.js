import React from 'react';

import { Footer, Trends, Ethics, Applications, AboutAI, Header } from './containers';
import { Navbar, Brand, CTA } from './components';
import './App.css';
const App = () => {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
				<Brand />
				<AboutAI />
				<Applications />
				<Ethics />
				<CTA />
				<Trends />
				<Footer />
			</div>
		</div>
	);
};

export default App;
