import React from 'react';
import { Navbar, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <Navbar>
      <Logo href="#">
        <strong>weather</strong>App
      </Logo>

      <ul>
        <li>
          <a href="#">home</a>
        </li>
      </ul>
    </Navbar>
  );
};

export default Header;
