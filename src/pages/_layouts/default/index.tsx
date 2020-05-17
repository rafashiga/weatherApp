import React from 'react';
import { Wrapper } from './styles';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default DefaultLayout;
