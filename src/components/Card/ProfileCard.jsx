import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar/Avatar';
import Nav from '../Nav/Nav';
import WaveHand from '../../assets/svg/wave-hand.svg';

const Card = styled.div`
  background: ${props => props.theme.colors.card};
  border-radius: 8px;
  margin-top: 40px;
  padding: 120px 40px 40px;
  position: relative;
`;

const Name = styled.h1`
  color: ${props => props.theme.colors.primary};
  letter-spacing: 0.04em;
`;

const Text = styled.p`
  margin-top: 24px;
`;

const Mailer = styled.a`
  align-items: center;
  border: 0;
  border-radius: 4px;
  background: ${props => props.theme.colors.secondary};
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  margin-top: 24px;
  padding: 8px 12px;
  position: absolute;
  text-decoration: none;
  top: 20px;
  right: 40px;
  img {
    margin-left: 10px;
  }
  &:hover {
    color: white;
    background: ${props => props.theme.colors.hover};
    text-decoration: none;
  }
`;

const ProfileCard = ({ refItems }) => (
  <Card>
    <Avatar />
    <Mailer href="mailto:benedictpmateo@gmail.com" target="_blank">Get in touch <img src={WaveHand} alt=""/></Mailer>
    <h1>Hello, I'm</h1>
    <Name>Benedict Mateo</Name>
    <h3>Software Engineer</h3>
    <Text>Based out Manila, PH. Specialized in building web and mobile applications. If you are a business seeking for a web presence or an employer looking to hire, you can get in touch with me here.</Text>
    <Nav refItems={refItems} />
  </Card>
);

export default ProfileCard;