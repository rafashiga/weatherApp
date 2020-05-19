import styled from 'styled-components';

interface Props {
  error: boolean;
}

export const Container = styled.div<Props>`
  background: ${(props) =>
    props.error
      ? `linear-gradient(
          to left top,
          rgb(189, 195, 199),
          rgb(44, 62, 80)
        )`
      : `linear-gradient(
          to right bottom,
          ${props.theme.colors.secondary},
          ${props.theme.colors.primary}
        )`};
  margin-top: -5rem;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  color: ${(props) => props.theme.colors.light};
  font-weight: 500;

  h1 {
    margin-bottom: 1rem;
  }
`;

export const Message = styled.h1`
  font-size: 2rem;
`;

export const Temperature = styled.h1`
  font-size: 4rem;
`;

export const CurrentDate = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const Location = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;
