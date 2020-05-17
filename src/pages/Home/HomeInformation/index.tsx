import { darken } from 'polished';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ImgWeather from '../../../assets/img/undraw_weather.svg';
import Button from '../../../components/Button';
import { Information, InformationContent, InformationImage } from './styles';

const HomeInfomation: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Information>
      <InformationImage>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blobGradient2">
              <stop offset="5%" stopColor={colors.primary}></stop>
              <stop
                offset="95%"
                stopColor={darken(0.1, colors.secondary)}></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#blobGradient2)"
            d="M45.6,-67.7C59.8,-61.7,72.7,-50.4,80.9,-35.9C89.1,-21.5,92.6,-3.8,87.9,11C83.2,25.8,70.4,37.9,58,47.7C45.5,57.6,33.5,65.3,20.2,69.5C7,73.6,-7.5,74.1,-22.6,72C-37.7,69.8,-53.4,64.9,-65.9,54.7C-78.4,44.6,-87.6,29.3,-91.2,12.3C-94.8,-4.6,-92.9,-23,-82.9,-35C-73,-46.9,-55,-52.2,-39.8,-57.8C-24.7,-63.4,-12.3,-69.2,1.7,-71.8C15.7,-74.4,31.3,-73.7,45.6,-67.7Z"
            transform="translate(100 100)"
          />
        </svg>
        <img src={ImgWeather} alt="weather" />
      </InformationImage>
      <InformationContent>
        <h3>Ut duis pariatur occaecat dolore</h3>
        <p>
          Laborum consectetur fugiat nulla dolor adipisicing eu incididunt
          excepteur dolore. Labore sunt velit anim pariatur est esse voluptate.
          Non pariatur aliqua consequat dolor aliqua velit labore dolore
          excepteur amet ipsum incididunt culpa. Laborum consectetur fugiat
          nulla dolor adipisicing eu incididunt excepteur dolore. Labore sunt
          velit anim pariatur est esse voluptate. Non pariatur aliqua consequat
          dolor aliqua velit labore dolore excepteur amet ipsum incididunt
          culpa.
        </p>
        <Button color="primary">more</Button>
      </InformationContent>
    </Information>
  );
};

export default HomeInfomation;
