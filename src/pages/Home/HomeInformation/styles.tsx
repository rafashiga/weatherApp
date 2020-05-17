import styled from 'styled-components';

export const Information = styled.section`
  width: 80%;
  margin: 0 auto;
  background: none;
  padding: 1rem 0;

  @media (min-width: 768px) {
    margin-top: -5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const InformationContent = styled.div`
  margin-top: 5rem;

  @media (max-width: 768px) {
    text-align: center;
  }

  h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.text};
  }

  p {
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const InformationImage = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
  }

  svg {
    position: absolute;
    width: 24rem;
    left: 0;
    top: 0;
    z-index: 2;

    @media (max-width: 400px) {
      width: 14rem;
    }

    @media (max-width: 768px) {
      z-index: -2;
      left: 50%;
      transform: translateX(-50%);
    }

    @media (min-width: 1500px) {
      width: 30rem;
    }
  }

  img {
    text-align: center;
    width: 24rem;
    margin-top: 4rem;
    z-index: 3;

    @media (min-width: 1500px) {
      width: 30rem;
    }

    @media (max-width: 400px) {
      width: 10rem;
    }
  }
`;
