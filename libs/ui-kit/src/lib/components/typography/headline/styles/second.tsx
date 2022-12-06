import { css } from 'styled-components';

export const Second = css`
  font-family: 'QuadratGroteskNew', sans-serif;

  font-size: 24px;
  font-weight: 400;
  line-height: 120%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 44px;
  }
`;
