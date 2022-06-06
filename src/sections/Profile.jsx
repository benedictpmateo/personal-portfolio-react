import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ProfileCard from '../components/Card/ProfileCard';
import SocialLinks from '../components/Social/SocialLinks';
import Experience from './Experience';
import Skills from './Skills';

const Container = styled.div`
  @media(min-width: 992px) {
    .sticky {
      position: -webkit-sticky;
      position: sticky;
      top: 40px;
      height: 110vh;
    }
  }

  .disclaimer {
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.text};
    }
  }
`;

const Disclaimer = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.card};
  border-radius: 8px;
  bottom: 0;
  flex-wrap: wrap;
  height: 100%;
  left: 0;
	padding: 60px;
  position: fixed;
  text-align: center;
  transition: all 1s ease 0s;
  width: 100vw;
  z-index: 1000;
  &.show {
    display: flex;
  }
  &.hide {
    display: none;
  }
  h3, p {
    letter-spacing: 0.05em;
    margin-bottom: 24px;
    width: 100%;
  }
  .close {
    cursor: pointer;
    position: absolute;
    right: 40px;
    top: 40px;
    span {
      color: white;
      font-size: 12px;
      letter-spacing: 0.5em;
      &:hover {
        color: ${props => props.theme.colors.text};
      }
    }
  }
`;

const Profile = () => {
  const [disclaimer, setDisclaimer] = useState(false);
  const experienceRef = useRef();
  const skillRef = useRef();

  return (
    <Container>
      <Disclaimer className={disclaimer ? 'show' : 'hide'}>
        <div className="close" onClick={() => setDisclaimer(false)}><span>CLOSE</span></div>
        <div>
          <h3>CONTENT DISCLAIMER</h3>
          <p>
            Developer represents and warrants that developer has the knowledge,
            skill and experience necessary to produce the works. Projects are intellectual property of each client or employer.
            This site was created to showcase the skills, trade, profession and expertise of the developer.
          </p>
        </div>
      </Disclaimer>
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 sticky">
            <ProfileCard refItems={{
              'Work Experience': experienceRef,
              'Skills + Tools': skillRef,
            }} />
            <SocialLinks />
          </div>
          <div className="col-12 col-lg-6">
            {/* <Projects setRef={projectRef} /> */}
            <Experience setRef={experienceRef} />
            <Skills setRef={skillRef} />
            {/* <Interest setRef={interestRef} /> */}
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex pb-5 flex-wrap">
            <p className="mr-2">Copyright &copy; {new Date().getFullYear()} Benedict Mateo</p>
            <p className="mr-2">•</p>
            <p className="disclaimer" title="View Disclaimer" onClick={() => setDisclaimer(true)}>Disclaimer</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;