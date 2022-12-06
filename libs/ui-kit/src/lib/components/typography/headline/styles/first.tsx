import { css } from 'styled-components';

export const First = css`
  font-family: 'QuadratGroteskNew', sans-serif;

  font-size: 36px;
  font-weight: 400;
  line-height: 108%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 48px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 60px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 76px;
  }
`;