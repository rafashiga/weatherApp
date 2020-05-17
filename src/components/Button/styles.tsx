import styled from 'styled-components';
import { darken } from 'polished';

export const Btn = styled.button`
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
