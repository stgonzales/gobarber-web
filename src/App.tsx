import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from './styles/global'

import AppProvider from './hooks'

// import SignUp from "./pages/SignUp";


import Routes from './routes'

const App: React.FC = () => (
  // <>
  //   <AppProvider>
  //     <SignUp />
  //     <GlobalStyle />
  //   </AppProvider>
  // </>

  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyle />
  </Router>
);

export default App;
