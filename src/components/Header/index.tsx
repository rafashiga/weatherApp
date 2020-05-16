import React from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { Navbar, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <Navbar>
      <Logo href="#">
        <TiWeatherPartlySunny size={36} color="#fff" />
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
