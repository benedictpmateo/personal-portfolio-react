import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import ProfileCard from '../components/Card/ProfileCard';
import SocialLinks from '../components/Social/SocialLinks';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Interest from './Interest';

const Container = styled.div`
  @media(min-width: 1200) {

  }

  @media(min-width: 992px) {
    .sticky {
      position: -webkit-sticky;
      position: sticky;
      top: 40px;
      height: 115vh;
    }
  }

  @media(min-width: 768px) {
  }
`;

const Profile = () => {
  const projectRef = useRef();
  const experienceRef = useRef();
  const skillRef = useRef();
  const interestRef = useRef();

  return (
    <Container>
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 sticky">
            <ProfileCard refItems={{
              'Projects': projectRef,
              'Experience': experienceRef,
              'Skills': skillRef,
              'Interest': interestRef
            }} />
            <SocialLinks />
          </div>
          <div className="col-12 col-lg-6">
            <Projects setRef={projectRef} />
            <Experience setRef={experienceRef} />
            <Skills setRef={skillRef} />
            <Interest setRef={interestRef} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;