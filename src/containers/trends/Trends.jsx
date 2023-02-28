import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './trends.css';
const items = [
	{
		headline: 'Revolutionizing the Way We Learn',
		date: '20.01.2023',
		text: "Stay up-to-date on the latest news and trends in the world of AI. From breakthrough research to new applications, we'll keep you informed about the latest developments in this exciting field.",
		img: blog01,
	},
	{
		headline: 'Adaptive Learning and Personalization: How AI is Changing Education',
		date: '24.02.2023',
		text: 'AI is transforming the way we learn, with adaptive learning technologies that personalize the learning experience for each student. By analyzing student data and behavior, AI-powered systems can identify areas where a student needs extra help and provide targeted feedback and resources. This approach can improve student engagement, retention, and performance, making education more effective and efficient.',
		img: blog02,
	},
	{
		headline: 'AI-Powered Virtual Assistants: The Future of Student Support Services',
		date: '23.02.2023',
		text: 'Virtual assistants and chatbots are becoming increasingly popular in the education sector, providing students with 24/7 access to personalized support and resources. These AI-powered tools can answer common questions, provide guidance on assignments and projects, and even offer mental health support. By automating routine tasks and providing personalized assistance, virtual assistants can help students stay on track and succeed in their studies.',
		img: blog03,
	},
	{
		headline: 'The Importance of Transparency in AI Decision-Making',
		date: '22.01.2023',
		text: "AI systems can have a significant impact on people's lives, from determining loan approvals to guiding medical treatment decisions. It is essential that these systems are transparent, explainable, and accountable, to ensure that they are making fair and unbiased decisions. This requires ethical considerations and standards for AI development and implementation, including transparency in data collection, algorithmic decision-making, and outcomes.",
		img: blog04,
	},
	{
		headline: 'Addressing Bias and Diversity in AI: Challenges and Solutions',
		date: '23.02.2023',
		text: 'AI systems can reflect the biases and stereotypes of their creators and training data, perpetuating discrimination and inequality. To ensure that AI is fair and equitable, it is important to address issues of bias and diversity in AI development and deployment. This can involve diverse representation in the development team, data collection and cleansing, algorithmic fairness testing, and ongoing monitoring and evaluation. By promoting diversity and addressing bias, we can create more inclusive and equitable AI systems.',
		img: blog05,
	},
];
const Trends = () => {
	return (
		<div className="gpt__trends section__padding" id="trends">
			<div className="gpt__trends-heading gradient__text">
				<h1>AI News and Trends</h1>
			</div>
			<div className="gpt__trends-container">
				<div className="gpt__trends-container_groupA">
					<Article
						imgUrl={items[0].img}
						date={items[0].date}
						text={items[0].text}
						title={items[0].headline}
					/>
				</div>
				<div className="gpt__trends-container_groupB">
					{items.map((el, idx) => {
						if (idx === 0) return null;
						return (
							<Article
								key={el.date + idx}
								imgUrl={el.img}
								date={el.date}
								text={el.text}
								title={el.headline}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Trends;
