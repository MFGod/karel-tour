import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import {
  ETextVariant,
  Text,
} from '../../../../../../libs/ui-kit/src/lib/components/typography';

import { names } from '../../routes';

import { Logo } from './logo';
import { PhoneLink } from './phone-links';

const StyledLogo = styled(Logo)`
  width: 100px;
  height: 60px;
`;

const Wrapper = styled.header`
  z-index: 2;
  background-color: #cbcbcb;

  padding: 16px 24px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 22px;

  white-space: nowrap;

  list-style: none;
`;

export const Header: FC = () => {
  return (
    <Wrapper>
      <StyledLogo />

      <List>
        {Object.entries(names).map(([name, href], index) => (
          <li key={index}>
            <Link href={href} passHref legacyBehavior>
              <Text variant={ETextVariant.Small} as="a">
                {names[name]}
              </Text>
            </Link>
          </li>
        ))}
      </List>

      <PhoneLink />
    </Wrapper>
  );
};
