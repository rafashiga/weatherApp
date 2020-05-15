import React from 'react';
import { Btn } from './styles';

const Button: React.FC = ({ children }) => {
  return <Btn>{children}</Btn>;
};

export default Button;
