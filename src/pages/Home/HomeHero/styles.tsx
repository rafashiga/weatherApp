import { darken } from 'polished';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 100%;
`;

export const Hero = styled.div`
  margin-top: -4rem;
  background: linear-gradient(
    to right bottom,
    ${(props) => props.theme.colors.secondary},
    ${(props) => props.theme.colors.primary}
  );
  position: relative;
  color: #fff;
  overflow: hidden;
  z-index: 1;
`;

export const WaveSvg = styled.svg`
  display: block;
`;

export const Blob = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 4rem;
  width: 35rem;
  object-fit: cover;
  z-index: -2;

  @media (min-width: 1400px) {
    top: 0rem;
    width: 40rem;
  }

  @media (max-width: 990px) {
    right: -3rem;
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const BlobSvg = styled.svg`
  right: -2rem;
  width: 35rem;

  @media (min-width: 1500px) {
    width: 40rem;
  }

  @media (max-width: 990px) {
    width: 29rem;
  }
`;

export const HeroContent = styled.div`
  height: 45vh;
  width: 80%;
  margin: 0 auto;
  margin-top: 4rem;
  display: flex;
  align-items: center;

  h1 {
    font-size: 3rem;
    font-weight: 300;

    strong {
      font-weight: 500;
    }
  }

  h3 {
    font-size: 1.4rem;
    text-transform: lowercase;
    font-weight: 300;
    margin-bottom: 1rem;
  }
`;

export const ImgHero = styled.div`
  position: absolute;
  top: 4rem;
  overflow: hidden;
  object-fit: cover;
  width: 40rem;
  right: 3rem;
  z-index: 1;

  img {
    width: 40rem;
    right: 3rem;
  }

  @media (min-width: 1500px) {
    top: 5rem;
    width: 50rem;

    img {
      top: 2rem;
      width: 50rem;
    }
  }

  @media (max-width: 990px) {
    width: 50%;
    right: 0;

    img {
      width: 30rem;
    }
  }

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 550px) {
    visibility: hidden;
    display: none;
  }
`;

export const ButtonLink = styled(Link)`
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1rem;

  background: linear-gradient(
    to right,
    ${(props) => darken(0.1, props.theme.colors.secondary)},
    ${(props) => darken(0.2, props.theme.colors.secondary)}
  );
  color: #fff;
  transition: all 0.2s;

  &:hover {
    background: linear-gradient(
      to right,
      ${(props) => darken(0.2, props.theme.colors.secondary)},
      ${(props) => darken(0.3, props.theme.colors.secondary)}
    );
  }
`;
