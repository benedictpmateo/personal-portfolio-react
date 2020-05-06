import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import theme from './utils/theme';
import Profile from './sections/Profile';

const Background = styled.div`
  background: ${props => props.theme.colors.background};
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Background>
      <Profile />
    </Background>
  </ThemeProvider>
);

export default App;
