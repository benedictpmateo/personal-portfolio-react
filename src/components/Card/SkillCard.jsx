import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	position: relative;
	width: 100%;

	@media (min-width: 992px) {
		&.margin-top {
			margin-top: 120px;
		}
	}
`;

const CardBody = styled.div`
	background: ${props => props.theme.colors.card};
	border-radius: 8px;
	padding: 40px 20px;
	margin-bottom: 24px;
	text-align: center;
	transition: transform .2s ease-in-out;
	position: relative;
	width: 100%;
	p {
		color: ${props => props.theme.colors.text};
		margin: 0;
		margin-top: 24px;
	}
	&:hover {
		box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16);
		@media (min-width: 992px) {
			transform: scale(1.1);
		}
		z-index: 1;
	}
`;

const SkillCard = ({ title, image, index }) => (
	<Card className={
		"col-12 col-md-4 col-lg-4 "
		+ (index === 0 || index === 2 ? 'margin-top' : '' )
	}>
		<CardBody>
			<img src={image} alt=""/>
			<p>{title}</p>
		</CardBody>
	</Card>
);

export default SkillCard;