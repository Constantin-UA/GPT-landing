import React from 'react';
import { Feature } from '../../components';
import './applications.css';

const data = [
	{
		title: 'Healthcare',
		text: 'AI is transforming the healthcare industry, from personalized medicine and disease diagnosis to drug discovery and clinical trials. AI-powered tools can help doctors and researchers analyze large amounts of medical data to identify patterns and make better treatment decisions, leading to improved patient outcomes.',
	},
	{
		title: 'Finance',
		text: 'AI is being used in the finance industry to improve risk assessment, fraud detection, and customer service. Machine learning algorithms can analyze vast amounts of financial data to identify patterns and make predictions, helping financial institutions to make better decisions and reduce risk.',
	},
	{
		title: 'Transportation',
		text: 'AI is playing an increasingly important role in transportation, from self-driving cars and trucks to predictive maintenance and traffic management. Autonomous vehicles have the potential to improve road safety and reduce traffic congestion, while predictive maintenance can help prevent breakdowns and reduce downtime for vehicles.',
	},
	{
		title: 'Entertainment',
		text: `AI is also being used in the entertainment industry to improve the user experience and create new forms of content. For example, AI-powered recommendation systems can suggest movies, music, and TV shows based on a user's viewing history, while virtual assistants and chatbots can provide personalized recommendations and customer support.`,
	},
];

const Applications = () => {
	return (
		<div className="gpt__applications section__padding" id="applications">
			<div className="gpt__applications-heading">
				<h1 className="gradient__text">
					Experience the Power of AI Across Industries: Healthcare, Finance, Transportation, and
					Entertainment.
				</h1>
				<p>Transforming Industries and Improving Lives with AI</p>
			</div>
			<div className="gpt__applications-container">
				{data.map((item, index) => (
					<Feature key={item.title + index} {...item} />
				))}
			</div>
		</div>
	);
};

export default Applications;
