import React from 'react';
import styled from 'styled-components';
import ProfileCard from '../components/Card/ProfileCard';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
  .col {
    width: 100%;
  }

  @media(min-width: 1200) {

  }

  @media(min-width: 992px) {
    flex-wrap: nowrap;
    padding: 60px;
    .col {
      width: 50%;
    }
    .margin-right {
      margin-right: 60px;
    }
  }

  @media(min-width: 768px) {
  }
`;

const Profile = () => (
  <Container>
    <div className="col margin-right">
      <ProfileCard />
    </div>
    <div className="col">
    </div>
  </Container>
);

export default Profile;