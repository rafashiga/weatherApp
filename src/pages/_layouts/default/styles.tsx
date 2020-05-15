import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.div`
  background: linear-gradient(
    to right bottom,
    rgb(83, 105, 118),
    rgb(41, 46, 73)
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

  @media (max-width: 990px) {
    right: 0;
    width: 50%;
  }

  @media (max-width: 768px) {
    right: 0;
    width: 50%;
  }
`;

export const BlobSvg = styled.svg`
  right: -2rem;
  width: 35rem;
  z-index: 1;

  @media (max-width: 990px) {
    width: 29rem;
  }
`;

export const HeaderContent = styled.div`
  height: 45vh;
  width: 80%;
  margin: 0 auto;
  margin-top: 4rem;
  display: flex;
  align-items: center;

  div {
    z-index: 9;
  }
`;
