import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Hero = styled.div`
  background: linear-gradient(
    to right bottom,
    rgb(41, 46, 73),
    rgb(83, 105, 118)
  );
  position: relative;
  color: #fff;
  overflow: hidden;
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

  @media (min-width: 1400px) {
    top: -2rem;
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
  z-index: 1;

  @media (min-width: 1400px) {
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
    font-weight: 100;

    strong {
      font-weight: 500;
    }
  }

  h3 {
    font-size: 1.4rem;
    text-transform: lowercase;
    font-weight: 300;
  }

  div {
    z-index: 9;
  }
`;

export const ImgHero = styled.div`
  position: absolute;
  top: 4rem;
  overflow: hidden;
  object-fit: cover;
  width: 40rem;
  right: 3rem;
  z-index: 2;

  @media (min-width: 1400px) {
    top: 2rem;
    width: 50rem;
  }

  @media (max-width: 990px) {
    width: 50%;
    right: 0;
  }

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 550px) {
    visibility: hidden;
    display: none;
  }

  img {
    width: 40rem;
    right: 3rem;

    @media (min-width: 1400px) {
      top: 2rem;
      width: 50rem;
    }

    @media (max-width: 990px) {
      width: 30rem;
    }
  }
`;

export const Main = styled.main`
  position: relative;
  height: 500px;
  background: #333;
  margin-top: -1px;
  z-index: 99;
`;
