import React from 'react'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/Global";

import { Home } from './pages';

const theme = {
  primary: 'hsl(26, 100%, 55%)',
  primaryLight: 'hsl(25, 100%, 94%)',
  secondary: 'hsl(219, 9%, 45%)',
  secondaryLight: 'hsl(220, 14%, 75%)'
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
     
  );
}

export default App;
