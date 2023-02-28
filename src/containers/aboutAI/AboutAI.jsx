import React from 'react';
import { Feature } from '../../components';
import './aboutAI.css';

const AboutAI = () => (
	<div className="gpt__aboutAI section__margin" id="wgpt">
		<div className="gpt__aboutAI-feature">
			<Feature
				title="What is AI?"
				text="Artificial intelligence (AI) refers to the development of computer systems that can perform tasks that usually require human intelligence, such as visual perception, speech recognition, decision-making, and natural language processing. AI has the potential to revolutionize the way we live and work, from healthcare and transportation to finance and entertainment."
			/>
		</div>
		<div className="gpt__aboutAI-heading">
			<h1 className="gradient__text">
				Discover the Building Blocks of AI: Machine Learning, Neural Networks, and Deep Learning!
			</h1>
			<p>Explore the Library</p>
		</div>
		<div className="gpt__aboutAI-container">
			<Feature
				title="Machine Learning"
				text="Machine learning is a subset of AI that involves training computer systems to improve their performance on a specific task without being explicitly programmed. This is done by feeding the system large amounts of data and allowing it to learn patterns and make predictions based on that data. Machine learning is used in a variety of applications, including image recognition, natural language processing, and predictive modeling."
			/>
			<Feature
				title="Neural Networks"
				text="Neural networks are a type of machine learning algorithm that are modeled after the structure and function of the human brain. They are made up of interconnected nodes that process information and make decisions based on that information. Neural networks are used in a variety of applications, including image and speech recognition, natural language processing, and autonomous vehicles."
			/>
			<Feature
				title="Deep Learning"
				text="Deep learning is a type of machine learning that uses neural networks with multiple layers to analyze and process data. This approach has revolutionized many areas of AI, including computer vision, speech recognition, and natural language processing. Deep learning is used in a wide range of applications, from virtual assistants and chatbots to self-driving cars and personalized medicine."
			/>
		</div>
	</div>
);

export default AboutAI;
