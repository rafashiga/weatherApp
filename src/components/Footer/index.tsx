import React from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <h3>
        <TiWeatherPartlySunny size={64} color="#fff" />
        <br />
        <strong>weather</strong>App
      </h3>
      <br />
      <p>
        developed by{' '}
        <a href="http://rafashiga.github.io/">
          {' '}
          <strong>Rafael Shiga</strong>
        </a>
      </p>
    </Container>
  );
};

export default Footer;
