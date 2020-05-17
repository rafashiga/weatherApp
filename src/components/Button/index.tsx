import React from 'react';
import { Btn } from './styles';

interface Props {
  children: string;
  color?: string;
}

const Button: React.FC<Props> = ({ children, color }) => {
  return <Btn color={color}>{children}</Btn>;
};

export default Button;
