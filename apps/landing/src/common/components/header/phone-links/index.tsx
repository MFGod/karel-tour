import styled from 'styled-components';

import {
  ETextVariant,
  Text,
} from '../../../../../../../libs/ui-kit/src/lib/components/typography';

import { PhoneIcon } from '../../../../../public/icons/phone';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:5px;
`;

export const PhoneLink = () => {
  return (
    <Wrapper>
      <PhoneIcon />

      <Text variant={ETextVariant.Small}>Связаться с нами</Text>
    </Wrapper>
  );
};
