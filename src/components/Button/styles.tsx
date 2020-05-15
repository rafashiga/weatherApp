import styled from 'styled-components';
import { darken } from 'polished';

export const Btn = styled.button`
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  background: ${darken(0.08, '#333')};
  color: #fff;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.1, '#333')};
  }
`;
