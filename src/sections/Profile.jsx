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

const Disclaimer = styled.div`
  background: ${props => props.theme.colors.card};
  border-radius: 8px;
	padding: 20px;
	margin-bottom: 24px;
  text-align: center;
  h5 {
    letter-spacing: 0.05em;
  }
  p {
    font-size: 10px;
    margin: 0;
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
            <Disclaimer>
              <p>
                CONTENT DISCLAIMER: Developer represents and warrants that developer has the knowledge,
                skill and experience necessary to produce the works. Projects are intellectual property of each client or employer.
                This site was created to showcase the skills, trade, profession and expertise of the developer.
              </p>
            </Disclaimer>
          </div>
        </div>
        <div className="col-12">
        </div>
      </div>
    </Container>
  );
};

export default Profile;