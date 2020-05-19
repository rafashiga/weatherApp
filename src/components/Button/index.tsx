import React from 'react';
import { Btn } from './styles';

interface Props {
  children: string;
  color?: string;
  handleClick?: () => void;
}

const Button: React.FC<Props> = ({ children, color, handleClick }) => {
  return (
    <Btn color={color} onClick={handleClick}>
      {children}
    </Btn>
  );
};

export default Button;
