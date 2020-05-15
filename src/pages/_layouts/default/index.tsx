import React from 'react';
import { Wrapper } from './styles';
import HeroImg from '../../../assets/img/hero.svg';

const DefaultLayout: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default DefaultLayout;
