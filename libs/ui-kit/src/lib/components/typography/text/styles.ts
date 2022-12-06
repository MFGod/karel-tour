import { css } from 'styled-components';

const Medium = css`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  text-decoration: none;

  color: inherit;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 22px;
    line-height: 120%;
  }
`;

const Small = css`
  font-weight: 500;
  font-size: 12px;
  line-height: 19px;

  text-decoration: none;

  color: inherit;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Styles = { Medium, Small };
