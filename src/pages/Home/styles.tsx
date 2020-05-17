import styled from 'styled-components';
import { darken } from 'polished';

export const Main = styled.main`
  position: relative;
  margin-top: -1px;
  background: ${(props) => props.theme.colors.background};

  @media (max-width: 768px) {
    z-index: 9;
  }
`;

export const Newsletter = styled.section`
  position: relative;
  background: linear-gradient(
    to top left,
    ${(props) => props.theme.colors.secondary},
    ${(props) => props.theme.colors.primary}
  );
  color: #fff;
  overflow: hidden;

  div {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 10rem;
    text-align: center;

    h3 {
      font-size: 2rem;
    }

    @media (min-width: 768px) {
      margin-top: -6rem;
    }
  }

  p {
    margin: 1rem 0 3rem;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  input {
    border: none;
    padding: 0.75rem 1rem;
    color: #333;
    background: ${(props) => darken(0.02, props.theme.colors.background)};
    margin: 0 0.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    input {
      width: 70%;
      margin: 0.2rem 0;
    }

    button {
      margin-top: 2rem;
    }
  }
`;
