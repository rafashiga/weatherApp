import styled from 'styled-components';

export const Information = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-top: -5rem;
  z-index: -1;
  background: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const InformationContent = styled.div`
  margin-top: 5rem;

  h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: #f5f5f5;
  }

  p {
    margin-bottom: 2rem;
    color: #f5f5f5;
  }
`;

export const InformationImage = styled.div`
  position: relative;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    position: absolute;
    width: 24rem;
    left: 0;
    top: 0;
    z-index: 2;

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }

    @media (min-width: 1500px) {
      width: 30rem;
    }
  }

  img {
    display: block;
    text-align: center;
    width: 24rem;
    z-index: 9;

    @media (min-width: 1500px) {
      width: 30rem;
    }
  }
`;
