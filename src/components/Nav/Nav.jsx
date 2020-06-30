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

const items = [
  'Projects I\'ve worked on',
  'Work Experience',
  'Skills + Tools',
  'Interest'
];

const Nav = ({ refItems }) => {
  const [active, setActive] = useState('Projects I\'ve worked on');

  useEffect(_ => {
    const handleScroll = _ => {
      const y = window.pageYOffset;
      const expY = refItems['Work Experience'].current.offsetTop - 30;
      const skiY = refItems['Skills + Tools'].current.offsetTop - 30;
      const intY = (refItems['Skills + Tools'].current.offsetTop - 30) + (refItems['Interest'].current.clientHeight);
      console.log(y, intY)
      let setter = null;
      if (y < expY) {
        setter = 'Projects I\'ve worked on';
      } else if (y < skiY) {
        setter = 'Work Experience';
      } else if (y < intY) {
        setter = 'Skills + Tools';
      } else {
        setter = 'Interest';
      }
      setActive(setter);
    }
    window.addEventListener('scroll', handleScroll)
    return _ => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [refItems])

  const handleActive = (item, scroll) => {
    if (item !== active) {
      let y = 0;
  
      switch (item) {
        case 'Projects I\'ve worked on':
          y = refItems[item].current.offsetTop - 40;
          break;
        case 'Work Experience':
          y = refItems[item].current.offsetTop - 30;
          break;
        case 'Skills + Tools':
          y = refItems[item].current.offsetTop - 30;
          break;
        case 'Interest':
          y = refItems[item].current.offsetTop - 30;
          break;
        default:
      }

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
    </List>
  ); 
};

export default Nav;
