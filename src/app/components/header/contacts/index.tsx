import { FC } from 'react';

import styled from 'styled-components';
import { Vk } from '../../../../../public/images/icons/massangers/vk';
import { Telegram } from '../../../../../public/images/icons/massangers/telegram';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Anchor = styled.a`
  padding: 4px 4px 4px 4px;
  display: flex;
`;

const StyledVk = styled(Vk)`
  width: 40px;
  height: 40px;
`;

const StyledTelegram = styled(Telegram)`
  width: 40px;
  height: 40px;

  color: ${(props) => props.theme.text};
`;

export const Contacts: FC = () => (
  <Wrapper>
    <Anchor href="https://t.me/+79114135169">
      <StyledTelegram />
    </Anchor>

    <Anchor href="https://vk.com/">
      <StyledVk />
    </Anchor>
  </Wrapper>
);
