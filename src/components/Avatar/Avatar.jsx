import React from 'react';
import ProfilePicture from '../../assets/svg/profile-picture.svg';
import styled from 'styled-components';

const Rounded = styled.div`
  border-radius: 999px;
  height: 120px;
  overflow: hidden;
  position: absolute;
  text-align: center;
  top: -40px;
  width: 120px;
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
