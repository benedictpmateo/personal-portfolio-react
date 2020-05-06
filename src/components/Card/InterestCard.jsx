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
    p {
        margin: 0;
    }

`;

const InterestCard = ({ header, title, description }) => (
	<Card className="col-12">
		<CardBody>
			<h5>{header}</h5>
			<h3>{title}</h3>
            <p>{description}</p>
		</CardBody>
	</Card>
);

export default InterestCard;