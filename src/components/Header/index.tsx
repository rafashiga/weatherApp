import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/">Home </Link>
        </li>
      </ul>
    </Navbar>
  );
};

export default Header;
