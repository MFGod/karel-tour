import { FC } from 'react';
import styled from 'styled-components';
import {
  EHeadlineVariant,
  ETextVariant,
  Headline,
  Text,
} from '../../../../../libs/ui-kit/src/lib/components/typography';
import { SocialNetworks } from '../../common/components/socialNetworks';

const Wrapper = styled.section`
  height: 100vh;
  padding: 15px;

  background-image: url('apps/landing/public/images/welcome-bg.jpg');

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const StyledText = styled(Text)`
  text-align: center;
`;

const StyledSocialNetworks = styled(SocialNetworks)`
  align-self: end;
`;

export const Welcome: FC = (props) => {
  return (
    <Wrapper>
      <Headline variant={EHeadlineVariant.First} as="h1">
        Добро пожаловать в Карелию
      </Headline>

      <StyledText variant={ETextVariant.Small}>
        Приглашаем в лучшее приключение в вашей жизни,
        <br /> мы создадим ваш отпуск!
      </StyledText>

      <StyledSocialNetworks />
    </Wrapper>
  );
};
