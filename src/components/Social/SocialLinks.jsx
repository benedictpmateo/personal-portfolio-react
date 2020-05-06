import React from 'react';
import styled from 'styled-components';
import LinkedIn from '../../assets/svg/linkedin.svg';
import GitHub from '../../assets/svg/github.svg';
import Stackoverflow from '../../assets/svg/stackoverflow.svg';

const LinkList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 40px 0;
  width: 100%;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: center;
    a {
      margin-bottom: 12px;
      text-align: center;
      &:first-child {
        margin-right: 24px;
      }
    }
  }
`;

const Link = styled.a`
  align-items: flex-end;
  color: ${props => props.theme.colors.text};
  display: flex;
  text-decoration: none;
  img {
    margin-right: 12px;
  }
`;

const SocialLinks = () => {
  return (
    <LinkList>
      <Link href="https://www.linkedin.com/in/mateomattmatt/" target="_blank">
        <img src={LinkedIn} alt="" />
        LinkedIn
      </Link>
      <Link href="https://github.com/benedictpmateo" target="_blank">
        <img src={GitHub} alt="" />
        GitHub
      </Link>
      <Link href="https://stackoverflow.com/users/11454452/benedict-mateo" target="_blank">
        <img src={Stackoverflow} alt="" />
        Stackoverflow
      </Link>
    </LinkList>
  )  
};

export default SocialLinks;