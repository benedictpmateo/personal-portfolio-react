import React from 'react';
import ProfilePicture from '../../assets/svg/profile-picture.svg';
import styled from 'styled-components';

const Rounded = styled.div`
  border-radius: 999px;
  height: 140px;
  overflow: hidden;
  position: absolute;
  text-align: center;
  top: -60px;
  width: 140px;
  img {
    height: 100%;
  }
`;

const Avatar = () => {
  return (
    <Rounded>
      <img src={ProfilePicture} alt="" />
    </Rounded>
  )
};

export default Avatar;
