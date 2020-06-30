import React from 'react';
import styled from 'styled-components';
import ExperienceCard from '../components/Card/ExperienceCard';

const ExperienceList = styled.div`
	margin-bottom: 40px;
	margin-top: 80px;
	width: 100%;
`;

const items = [
	{
		date: 'JUNE 2020 - PRESENT',
		title: 'Front End Developer',
		company: 'Changing Digital',
		lists: [
			'Working mostly on the client-side projects and producing HTML, CSS and JavaScript.'
		]
	},
	{
		date: 'FEBRUARY 2020 - PRESENT',
		title: 'Front End Developer',
		company: 'Paykickstart LLC',
		lists: [
			'Creating and implementing functionality to custom components.',
		]
	},
	{
		date: 'APRIL 2019 - JUNE 2020',
		title: 'Software Engineer',
		company: 'Oqulo, August 99 Inc.',
		address: 'Ortigas, Pasig City, Philippines',
		lists: [
			'Developed and architectured MVP applications built with different web frameworks and libraries such as React + Redux (Saga), React Native, Vue.JS, Next, Nest, Nuxt, Laravel, MongoDB, PostgreSQL',
			'Constructed a working directory for coworking spaces in the philippines. https://cowork.ph',
			'Implemented the reservation allocation algorithm from loft.ph to the new application https://qspaceapp.com',
			'Developed a free time tracking software https://qtimesoftware.com'
		]
	},
	{
		date: 'JUNE 2018 - APRIL 2019',
		title: 'Web Application Developer',
		company: 'The Design People, August 99 Inc.',
		address: 'Ortigas, Pasig City, Philippines',
		lists: [
			'Developed a web application for booking and reservation of coworking spaces. https://loft.ph',
			'Developed a web application for listings of commercial properties in the PH https://real.ph',
			'Implemented reservation allocation algorithms for single order with multiple bookings with different dates.',
			'Technology used - MongoDB, Express, Pug, Vue.JS, Node | Laravel, PostgreSQL'
		]
	},
	{
		date: 'APRIL 2017 - MAY 2018',
		title: 'Full Stack Developer',
		company: 'Mergepoint System Solutions',
		address: 'Naga City, Bicol Region, Philippines',
		lists: [
			'Developed a mobile application content sharing for live & virtual events, meetings, training and marketing distribution.',
			'Practiced agile and scrum project management while building the application.',
			'Technology used - CouchDB, Express, Angular + Ionic, Node'
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