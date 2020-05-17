import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  height: 500px;
  margin-top: -2px;
  background: ${(props) => props.theme.colors.background};
`;

export const Newsletter = styled.section`
  background: linear-gradient(
    to top left,
    ${(props) => props.theme.colors.secondary},
    ${(props) => props.theme.colors.primary}
  );
  position: relative;
  color: #fff;
  overflow: hidden;

  div {
    width: 80%;
    margin: 0 auto;
    margin-top: -5rem;
    margin-bottom: 10rem;

    h3 {
      font-size: 1.75rem;
    }
  }
`;
