import styled from 'styled-components';
import { darken } from 'polished';

export const Navbar = styled.nav`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  ul {
    z-index: 2;
    display: flex;
    list-style: none;
    color: #fff;

    li:not(:last-child) {
      padding: 0 2rem;
    }

    a {
      color: #fff;
      transition: all 0.2s;

      &:hover {
        color: ${darken(0.2, '#fff')};
      }
    }
  }
`;

export const Logo = styled.a`
  color: #fff;
  font-weight: 100;
  font-size: 2rem;
  margin-right: 2rem;
  z-index: 2;
  display: flex;

  strong {
    font-weight: 500;
  }
`;
