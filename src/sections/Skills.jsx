import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';
import SkillCard from '../components/Card/SkillCard';

import angular from '../assets/svg/_angular.svg';
import css from '../assets/svg/_css.svg';
import html from '../assets/svg/_html.svg';
import js from '../assets/svg/_js.svg';
import mongo from '../assets/svg/_mongo.svg';
import node from '../assets/svg/_node.svg';
import postgres from '../assets/svg/_postgres.svg';
import react from '../assets/svg/_react.svg';
import sass from '../assets/svg/_sass.svg';
import vue from '../assets/svg/_vue.svg';

const SkillList = styled.div`
	width: 100%;
	margin-top: 40px;
	margin-bottom: 40px;
`;

const items = [
	{
		image: html,
		title: 'HTML'
	},
	{
		image: js,
		title: 'Javascript'
	},
	{
		image: angular,
		title: 'AngularJS'
	},
	{
		image: css,
		title: 'CSS'
	},
	{
		image: node,
		title: 'Node.js'
	},
	{
		image: mongo,
		title: 'MongoDB'
	},
	{
		image: sass,
		title: 'SASS'
	},
	{
		image: vue,
		title: 'Vue.js'
	},
	{
		image: postgres,
		title: 'PostgreSQL'
	},
	{
		image: react,
		title: 'React + Redux'
	},
];

const Skills = ({ setRef }) => (
	<SkillList ref={setRef}>
		<Masonry className="row">
			{
				items.map((item, i) => <SkillCard key={item.title} index={i} {...item} />)
			}
		</Masonry>
	</SkillList>
);

export default Skills;