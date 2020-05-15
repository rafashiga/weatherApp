import React from 'react';
import Button from '../../components/Button';
import {
  Wrapper,
  Hero,
  HeroContent,
  WaveSvg,
  BlobSvg,
  Blob,
  ImgHero,
  Main,
} from './styles';
import HeroImg from '../../assets/img/hero.svg';

const Home: React.FC = () => {
  return (
    <>
      <Hero>
        <HeroContent>
          <div>
            <h1>
              <strong>weather</strong>App
            </h1>
            <h3>check today's weather forecast</h3>
            <br />
            <Button>access</Button>
          </div>
        </HeroContent>
        <ImgHero>
          <img src={HeroImg} alt="Weather hero" />
        </ImgHero>
        <Blob>
          <BlobSvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="blobGradient">
                <stop offset="5%" stopColor="rgb(83, 105, 118)"></stop>
                <stop offset="95%" stopColor="rgb(41, 46, 73)"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#blobGradient)"
              d="M24.5,-47.3C31.7,-38.2,37.7,-31.7,44,-24.2C50.3,-16.8,57,-8.4,63.7,3.8C70.3,16.1,76.9,32.1,69.9,38.3C62.8,44.5,42.1,40.8,28.2,47.4C14.3,53.9,7.1,70.6,-1.9,73.9C-10.9,77.1,-21.8,66.9,-35,60C-48.3,53.1,-63.9,49.5,-65.8,40C-67.7,30.6,-55.9,15.3,-56.2,-0.2C-56.6,-15.7,-69,-31.3,-68.8,-43.8C-68.7,-56.3,-55.9,-65.5,-42.4,-71C-28.8,-76.6,-14.4,-78.3,-2.9,-73.3C8.6,-68.2,17.2,-56.4,24.5,-47.3Z"
              transform="translate(100 100)"
            />
          </BlobSvg>
        </Blob>
        <WaveSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#333"
            fillOpacity="1"
            d="M0,32L80,64C160,96,320,160,480,181.3C640,203,800,181,960,197.3C1120,213,1280,267,1360,293.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </WaveSvg>
      </Hero>
      <Main></Main>
    </>
  );
};

export default Home;
