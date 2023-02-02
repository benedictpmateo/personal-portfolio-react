import React from 'react';
import styled from 'styled-components';
import ExperienceCard from '../components/Card/ExperienceCard';

const ExperienceList = styled.div`
	margin-bottom: 40px;
	margin-top: 40px;
	width: 100%;
`;

const items = [
	{
		date: 'OCT 2021 - PRESENT',
		title: 'Senior Full Stack Developer',
		company: 'Royal Labs LLC',
		lists: [
			'Develop SaaS application used for clients in NFT',
			'Develop smart contracts using solidity',
			'Develop scripts to generate NFTs',
			'Develop mint pages and NFT features/applications using web3, ether.js, reactjs and vue',
		]
	},
	{
		date: 'JUNE 2020 - MAY 2022',
		title: 'Full Stack Developer',
		company: '(Remote) Changing Digital Ltd.',
		address: 'London Rd. Great Chesterford',
		lists: [
			'Develop web and mobile applications using ReactJS, React Native, NextJS, VueJS and Wordpress.'
		]
	},
	{
		date: 'FEB 2021 - Aug 2021',
		title: 'Full Stack Developer',
		company: '(Remote) CarClarity',
		address: 'Surry Hills, Australia',
		lists: [
			'Develop web application and microsite using Vue and NodeJS for API'
		],
	},
	{
		date: 'FEBRUARY 2020 - OCTOBER 2020',
		title: 'Front End Developer',
		company: '(Remote) Paykickstart LLC',
		address: 'Carmel, Indiana, United States',
		lists: [
			'Develop Web application using LaraVue (Laravel and VueJS)',
		]
	},
	{
		date: 'JUNE 2019 - NOV 2020',
		title: 'Full Stack Developer',
		company: '(Upwork) Filmis',
		lists: [
			'Develop a web application using LaraAngular (Laravel and Angular)'
		],
	},
	{
		date: 'APRIL 2019 - JUNE 2020',
		title: 'Software Engineer',
		company: '(Onsite) Oqulo, August 99 Inc.',
		address: 'Ortigas, Pasig City, Philippines',
		lists: [
			'Develop Web and Mobile applications using React, Vue, NuxtJS, NextJS, and React Native',
			'Built API and Backend Apps using NodeJS (Express), TypeORM, NestJS, Laravel, PostgreSQL and MongoDB',
		]
	},
	{
		date: 'JUNE 2018 - APRIL 2019',
		title: 'Web Application Developer',
		company: '(Onsite) The Design People, August 99 Inc.',
		address: 'Ortigas, Pasig City, Philippines',
		lists: [
			'Develop Web Applications using Wordpress, Laravel and VueJS and also created API and backend applications using PHP, NodeJS and MongoDB'
		]
	},
	{
		date: 'APRIL 2017 - MAY 2018',
		title: 'Full Stack Developer',
		company: '(Onsite) Mergepoint System Solutions',
		address: 'Naga City, Bicol Region, Philippines',
		lists: [
			'Develop Web and Mobile App using Ionic2 and API using Node, Express and CouchDB'
		]
	}
]

const Experience = ({ setRef }) => (
	<ExperienceList ref={setRef}>
		<div className="row">
			{items.map((item, i) => <ExperienceCard key={i} {...item} />)}
		</div>
	</ExperienceList>
);

export default Experience;
