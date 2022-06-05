/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';
import SkillCard from '../components/Card/SkillCard';

import {ReactComponent as _angular} from '../assets/svg/_angular.svg';
import {ReactComponent as _css} from '../assets/svg/_css.svg';
import {ReactComponent as _html} from '../assets/svg/_html.svg';
import {ReactComponent as _js} from '../assets/svg/_js.svg';
import {ReactComponent as _mongo} from '../assets/svg/_mongo.svg';
import {ReactComponent as _node} from '../assets/svg/_node.svg';
import {ReactComponent as _postgres} from '../assets/svg/_postgres.svg';
import {ReactComponent as _react} from '../assets/svg/_react.svg';
import {ReactComponent as _sass} from '../assets/svg/_sass.svg';
import {ReactComponent as _vue} from '../assets/svg/_vue.svg';
import {ReactComponent as _web3} from '../assets/svg/_web3.svg';
import {ReactComponent as _sol} from '../assets/svg/_sol.svg';

const SkillList = styled.div`
	margin-bottom: 40px;
	margin-top: 40px;
	padding: 0 5px 0;
	width: 100%;
	@media (min-width: 768px) {
		padding: 0;
	}
`;

const items = [
	{
		image: () => <_html />,
		title: 'HTML',
		color: '#e34e24'
	},
	{
		image: () => <_js />,
		title: 'Javascript',
		color: '#f7db04'
	},
	// {
	// 	image: () => <_angular />,
	// 	title: 'AngularJS',
	// 	color: '#e15854'
	// },
	{
		image: () => <_css />,
		title: 'CSS',
		color: '#1172b8'
	},
	{
		image: () => <_node />,
		title: 'Node.js',
		color: '#8ec84f'
	},
	{
		image: () => <_mongo />,
		title: 'MongoDB',
		color: '#67ad3f'
	},
	{
		image: () => <_sass />,
		title: 'SASS',
		color: '#9b57a2'
	},
	{
		image: () => <_vue />,
		title: 'Vue.js',
		color: '#3eb37e'
	},
	// {
	// 	image: () => <_postgres />,
	// 	title: 'PostgreSQL',
	// 	color: '#2f5d8d'
	// },
	{
		image: () => <_react />,
		title: 'React',
		color: '#00d1f7'
	},
	{
		image: () => <_web3 />,
		title: 'Web3',
		color: '#ff5722'
	},
	{
		image: () => <_sol />,
		title: 'Solidity',
		color: '#474949'
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