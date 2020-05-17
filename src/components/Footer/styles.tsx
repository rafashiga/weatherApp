import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.footer`
  min-height: 4rem;
  padding: 2rem 0;
  background: #000;
  text-align: center;
  color: #fff;

  h3 {
    font-size: 1.75rem;
    font-weight: 100;
  }

  a {
    color: ${(props) => props.theme.colors.secondary};
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
