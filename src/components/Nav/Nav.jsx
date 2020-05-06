import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import NavItem from './NavItem';

const List = styled.div`
  display: inline-grid;
  position: relative;
`;

const ActiveIndicator = styled.div`
  position: absolute;
  top: ${props => props.position}px;
  border-radius: 4px;
  background: ${props => props.theme.colors.secondary};
  margin: 6px 0;
  height: 35px;
  width: ${props => props.width}px;
  z-index: 0;

  transition: all 0.4s ease 0s;
`;

/**
 * 0
 * 47
 * 94
 * 141
 */
const items = [
  'Projects',
  'Experience',
  'Skills',
  'Interest'
];

const Nav = () => {
  const [active, setActive] = useState('Projects');
  const [position, setPosition] = useState(0);
  const [width, setWidth] = useState(115);

  const handleActive = (item) => {
    let pos = 0;
    switch (item) {
      case 'Projects':
        pos = 0;
        break;
      case 'Experience':
        pos = 47;
        break;
      case 'Skills':
        pos = 94;
        break;
      case 'Interest':
        pos = 141;
        break;
      default:
    }
    setTimeout(() => {
      setWidth(115);
    }, 200)
    setWidth(0);
    setPosition(pos);
    setActive(item);
  }

  return (
    <List>
      {
        items.map(
          (item) => 
            <NavItem
              key={item}
              label={item}
              active={active === item}
              click={() => handleActive(item)}
            />
        )
      }
      <ActiveIndicator 
        position={position}
        width={width}
      />
    </List>
  ); 
};

export default Nav;
