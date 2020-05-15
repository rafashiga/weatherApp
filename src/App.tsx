import React from 'react';
import DefaultLayout from './pages/_layouts/default';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <DefaultLayout>
      <GlobalStyle />
    </DefaultLayout>
  );
};

export default App;
