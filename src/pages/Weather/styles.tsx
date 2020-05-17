import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    to right bottom,
    ${(props) => props.theme.colors.secondary},
    ${(props) => props.theme.colors.primary}
  );
  margin-top: -5rem;
`;
