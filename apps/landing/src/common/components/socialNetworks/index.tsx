import { FC } from 'react';

import styled from 'styled-components';

import { Telegram } from './telegram';
import { Vk } from './vk';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Anchor = styled.a`
  padding: 4px 4px 4px 4px;
  display: flex;
`;

const StyledVk = styled(Vk)`
  width: 40px;
  height: 40px;


  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 47px;
    width: 47px;
  }
`;

const StyledTelegram = styled(Telegram)`
  width: 40px;
  height: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 47px;
    width: 47px;
  }
`;

export const SocialNetworks: FC = (props) => (
  <Wrapper {...props}>
    <Anchor href="tel:+79114135169">
      <StyledTelegram />
    </Anchor>

    <Anchor href="https://vk.com/sxgxd">
      <StyledVk />
    </Anchor>
  </Wrapper>
);
