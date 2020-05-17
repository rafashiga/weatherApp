import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import HomeHero from './HomeHero';
import { TiMail } from 'react-icons/ti';
import { Main, Newsletter, Form } from './styles';
import HomeInfomation from './HomeInformation';
import Button from '../../components/Button';

const Home: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <HomeHero />
      <Main>
        <HomeInfomation />
        <Newsletter>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#333"
              fillOpacity="1"
              d="M0,160L60,144C120,128,240,96,360,74.7C480,53,600,43,720,64C840,85,960,139,1080,144C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
          <div>
            <TiMail size={64} color={colors.text} />
            <h3>signup to our newsletter</h3>
            <p>
              Eu est nisi tempor adipisicing ipsum aliquip ea magna quis
              incididunt est.
            </p>
            <Form>
              <input type="text" placeholder="name" />
              <input type="email" placeholder="e-mail" />
              <Button>subscribe</Button>
            </Form>
          </div>
        </Newsletter>
      </Main>
    </>
  );
};

export default Home;
