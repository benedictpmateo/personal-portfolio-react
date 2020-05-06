import React, { useEffect, useState } from 'react';
import { ScrollTo } from 'react-scroll-to';
import styled from 'styled-components';
import NavItem from './NavItem';

const List = styled.div`
  display: none;
  position: relative;
  @media (min-width: 992px) {
    display: inline-grid;
  }
`;

const ActiveIndicator = styled.div`
  background: ${props => props.theme.colors.secondary};
  border-radius: 4px;
  height: 40px;
  left: 0;
  margin: 6px 0;
  position: absolute;
  top: ${props => props.position}px;
  width: 115px;
  z-index: 0;
  transition: all 0.4s ease 0s;
`;

const items = [
  'Projects',
  'Experience',
  'Skills',
  'Interest'
];

const offset = {
  'Projects': 0,
  'Experience': 52,
  'Skills': 104,
  'Interest': 156
};

const Nav = ({ refItems }) => {
  const [active, setActive] = useState('Projects');
  const [position, setPosition] = useState(0);

  useEffect(_ => {
    const handleScroll = _ => { 
      const expY = refItems['Experience'].current.offsetTop - 30;
      const skiY = refItems['Skills'].current.offsetTop - 30;
      let setter = null;
      // if (window.pageYOffset < expY) {
      //   setter = 'Projects';
      // } else if (window.pageYOffset < skiY) {
      //   setter = 'Experience';
      // } else if (window.pageYOffset >= skiY) {
      //   setter = 'Skills';
      // }
      if (setter !== active) {
        // setActive(setter);
        // setPosition(offset[setter]);
      }
    }
    window.addEventListener('scroll', handleScroll)
    return _ => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleActive = (item, scroll) => {
    if (item !== active) {
      let y = 0;
  
      switch (item) {
        case 'Projects':
          y = refItems[item].current.offsetTop - 40;
          break;
        case 'Experience':
          y = refItems[item].current.offsetTop - 30;
          break;
        case 'Skills':
          y = refItems[item].current.offsetTop - 30;
          break;
        case 'Interest':
          y = refItems[item].current.offsetTop - 30;
          break;
        default:
      }
      setPosition(offset[item]);
      setActive(item);
      if (scroll) {
        scroll({ y, smooth: true })
      }
    }
  }

  return (
    <List>
      {
        items.map(
          (item) => 
            <ScrollTo 
              key={item}
            >
              {
                ({ scroll }) => 
                  <NavItem
                    label={item}
                    active={active === item}
                    click={() => handleActive(item, scroll)}
                  />
              }
            </ScrollTo>
        )
      }
      <ActiveIndicator 
        position={position}
      />
    </List>
  ); 
};

export default Nav;
