import React from 'react';
import Masonry from 'react-masonry-component';
import styled from 'styled-components';
import ProjectCard from '../components/Card/ProjectCard';

import Duuzra from '../assets/img/duuzra.png';
import Filmis from '../assets/img/filmis.png';
import Paykickstart from '../assets/img/paykickstart.png';	

import CoworkerHQ from '../assets/svg/coworkerhq.svg';
import Loft from '../assets/svg/loft.svg';
import QSpace from '../assets/svg/qspace.svg';
import QTime from '../assets/svg/qtime.svg';
import RealPH from '../assets/svg/realph.svg';

const ProjectList = styled.div`
	width: 100%;
	margin-top: 40px;
	margin-bottom: 40px;
`;

const items = [
	{
		image: QSpace,
		title: 'QSpace App',
		subtitle: 'Express • VueJS • PostgreSQL',
		background: 'white',
	},
	{
		image: CoworkerHQ,
		title: 'Coworker HQ',
		subtitle: 'Nest JS • Next + Redux (Saga) • PostgreSQL',
		background: '#ebf41f'
	},
	{
		image: Filmis,
		title: 'Filmis',
		subtitle: 'Laravel 5 • Angular 7 • MySQL',
		background: '#DC503F',
	},
	{
		image: Paykickstart,
		title: 'Paykickstart',
		subtitle: 'Laravel • VueJS',
		background: 'white'
	},
	{
		image: Loft,
		title: 'Loft PH',
		subtitle: 'Express • VueJS • MongoDB',
		background: '#4A97D2',
	},
	{
		image: QTime,
		title: 'QTime Software',
		subtitle: 'Laravel • VueJS • PostgreSQL',
		background: 'white'
	},
	{
		image: RealPH,
		title: 'Real PH',
		subtitle: 'Laravel • PostgreSQL',
		background: '#68e497'
	},
	{
		image: Duuzra,
		title: 'Duuzra',
		subtitle: 'Express • Ionic 2 • CouchDB',
		background: '#4A97D2',
	},
]

const Projects = ({ setRef }) => {
	return (
		<ProjectList ref={setRef}>
			<Masonry className="row">
			{
				items.map(
					(item, i) => 
						<ProjectCard
							key={i}
							{...item}
						/>
				)
			}
			</Masonry>
		</ProjectList>
	)
};

export default Projects;