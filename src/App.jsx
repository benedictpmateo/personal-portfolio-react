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

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, I'm</h1>
//       <h1>Benedict Mateo</h1>
//       <h3>Software Engineer</h3>
//       <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
//     </div>
//   );
// }

export default App;
