import React from 'react';
import styled from 'styled-components';

const ButtonNav = styled.button`
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 12px;
  margin: 6px 0;
  text-align: left;
  width: 115px;
  z-index: 1;
  
  &:hover:not(.active) {
    background: ${props => props.theme.colors.background};
  }

  &.active {
    align-items: center;
    display: flex;
    margin-left: 5px;
    transition: margin 0.4s ease 0s;
    &:before {
      background: ${props => props.theme.colors.primary};
      border-radius: 999px;
      content: '';
      display: block;
      height: 5px;
      width: 5px;
      margin-right: 5px;
      transition: all 0.4s ease 0s;
    }
  }
`

const NavItem = ({ label, active, click }) => (
  <ButtonNav className={active ? 'active': ''} onClick={click}>{label}</ButtonNav>
);

export default NavItem;