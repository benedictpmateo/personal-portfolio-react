import React from 'react';
import styled from 'styled-components';
import InterestCard from '../components/Card/InterestCard';

const InterestList = styled.div`
	width: 100%;
	margin-top: 40px;
	margin-bottom: 40px;
`;

const items = [
	{
		header: 'INTEREST',
		title: 'Apart from being a programmer...',
		description: 'I enjoy most of my time being outdoors - travelling. When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows. I also spend a large amount of my free time exploring the latest technology advancements.'
	},
]

const Interest = ({ setRef }) => (
	<InterestList ref={setRef}>
		<div className="row">
			{items.map((item, i) => <InterestCard key={i} {...item} />)}
		</div>
	</InterestList>
);

export default Interest;