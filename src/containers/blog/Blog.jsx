import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
const data = ['Sep 26, 2021', 'GPT-3 and Open  AI is the future. Let us exlore how it is?'];
const Blog = () => {
	return (
		<div className="gpt__blog section__padding">
			<div className="gpt__blog-heading gradient__text">
				<h1> A lot is happening, We are blogging about it.</h1>
			</div>
			<div className="gpt__blog-container">
				<div className="gpt__blog-container_groupA">
					<Article imgUrl={blog01} date={data[0]} title={data[1]} />
				</div>
				<div className="gpt__blog-container_groupB">
					<Article imgUrl={blog02} date={data[0]} title={data[1]} />
					<Article imgUrl={blog03} date={data[0]} title={data[1]} />
					<Article imgUrl={blog04} date={data[0]} title={data[1]} />
					<Article imgUrl={blog05} date={data[0]} title={data[1]} />
				</div>
			</div>
		</div>
	);
};

export default Blog;
