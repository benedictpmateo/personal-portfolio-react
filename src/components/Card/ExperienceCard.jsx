import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	position: relative;
	width: 100%;
`;

const CardBody = styled.div`
	background: ${props => props.theme.colors.card};
	border-radius: 8px;
	padding: 40px;
	margin-bottom: 24px;
	transition: transform .2s ease-in-out;
	position: relative;
	width: 100%;
	h3 {
		color: ${props => props.theme.colors.primary};
		letter-spacing: 0.05em;
	}
	h5 {
		letter-spacing: 0.16em;
		font-family: 'Gilroy';
		&.address {
			letter-spacing: 0;
			color: ${props => props.theme.colors.text};
		}
	}
	h3, h5 {
		margin-bottom: 8px;
	}
	ul {
		margin-top: 24px;
		padding-left: 20px;
		li {
			color: ${props => props.theme.colors.text};
			margin-bottom: 8px;
		}
	}
	&:hover {
		box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16);
		@media (min-width: 992px) {
			transform: scale(1.1);
		}
		z-index: 1;
	}

`;

const ExperienceCard = ({ date, title, company, address, lists }) => (
	<Card className="col-12">
		<CardBody>
			<h5>{date}</h5>
			<h3>{title}</h3>
			<h5>{company}</h5>
			<h5 className="address">{address}</h5>
			<ul>
				{lists.map((item) => <li key={item}>{item}</li>)}
			</ul>
		</CardBody>
	</Card>
);

export default ExperienceCard;