import { css } from 'styled-components';

const Medium = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 22px;
    line-height: 30px;
  }
`;

const Small = css`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const Styles = { Medium, Small };
