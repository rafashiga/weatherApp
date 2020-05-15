import React from 'react';
import DefaultLayout from './pages/_layouts/default';
import GlobalStyle from './styles/global';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <DefaultLayout>
      <GlobalStyle />
      <Home />
    </DefaultLayout>
  );
};

export default App;
