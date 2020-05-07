import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	position: relative;
	width: 100%;
	&.col-6 {
		padding-left: 10px;
		padding-right: 10px;
	}
	@media (min-width: 768px) {
		&.col-6 {
			padding-left: 15px;
			padding-right: 15px;
		}
		&.margin-top {
			margin-top: 120px;
		}
	}
`;

const CardBody = styled.div`
	background: ${props => props.theme.colors.card};
	border-radius: 8px;
	padding: 20px 20px;
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
	svg {
		g, path {
			fill: ${props => props.setFill};
		}
	}
	@media (min-width: 992px) {
		padding: 40px 20px;
		svg {
			g, path {
				fill: ${props => props.theme.colors.text};
			}
		}
		&:hover {
			box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16);
			transform: scale(1.1);
			svg {
				g, path {
					fill: ${props => props.setFill};
				}
			}
			z-index: 1;
		}
	}
`;

const SkillCard = ({ title, image, color, index }) => (
	<Card className={
		"col-6 col-md-4 col-lg-4 "
		+ (index === 0 || index === 2 ? 'margin-top' : '' )
	}>
		<CardBody setFill={color}>
			{image()}
			<p>{title}</p>
		</CardBody>
	</Card>
);

export default SkillCard;