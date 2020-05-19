import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import DefaultLayout from './pages/_layouts/default';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';
import themeDefault from './styles/themes/default';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <ThemeProvider theme={themeDefault}>
        <DefaultLayout>
          <GlobalStyle />
          <Routes />
          <ToastContainer autoClose={3000} />
        </DefaultLayout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
