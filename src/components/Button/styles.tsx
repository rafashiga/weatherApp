import styled from 'styled-components';
import { darken } from 'polished';

export const Btn = styled.button`
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  background: ${darken(0.2, '#333')};
  color: #fff;
  transition: all 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;
