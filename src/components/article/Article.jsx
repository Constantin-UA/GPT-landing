import React, { useState } from 'react';
import './article.css';
const Article = ({ imgUrl, date, title, text }) => {
	const [showText, setShowText] = useState(false);
	const toggler = () => {
		console.log('connect');
		setShowText(!showText);
	};
	return (
		<div className="gpt__blog-container_article">
			<div className="gpt__blog-container_article-image">
				<img src={imgUrl} alt="blog_image" />
			</div>
			<div className="gpt__blog-container_article-content">
				<div>
					<p>{date}</p>
					<h3>{title}</h3>
				</div>
				<p onClick={() => toggler()}>Read Full Article</p>
			</div>
			<div
				className={
					showText
						? 'gpt__blog-container_article-text gpt__blog-container_article-text-show'
						: 'gpt__blog-container_article-text'
				}
				onClick={() => toggler()}
			>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Article;
