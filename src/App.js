import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT, Header } from './containers';
import { Navbar, Brand, CTA } from './components';

const App = () => {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGPT />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
};

export default App;
