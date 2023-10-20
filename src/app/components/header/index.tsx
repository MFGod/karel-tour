import { useContext } from 'react';
import styled from 'styled-components';

import { NavigationContext } from '@/app/context/context';

import { Links } from './links';
import { Theme } from './theme';

import { OpenMenu } from '../../../../public/images/icons/menu/open';
import { CloseMenu } from '../../../../public/images/icons/menu/close';
import { Logo } from '../../../../public/images/icons/logo';
import { Contacts } from './contacts';

interface IMenuProps {
  open: boolean;
}

const StyledLogo = styled(Logo)`
  width: 163px;
  height: 120px;
`;

export const Wrapper = styled.header<IMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  width: max-content;

  padding: 16px;

  background-color: #9a9a9a6e;

  transition: transform 0.3s ease-in-out;

  transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
`;

export const StyledMenu = styled.div<IMenuProps>`
  position: absolute;
  top: 2%;
  right: ${(props) => (props.open ? '0%' : '-18%')};

  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;

  border-radius: 6px;
  padding: 6px;

  background-color: #c9c9c992;

  transition: right 0.6s ease-in-out;
`;

export const Header = () => {
  const { open, toggleMenu } = useContext(NavigationContext);

  return (
    <Wrapper open={open}>
      <StyledMenu open={open} onClick={toggleMenu}>
        {open ? <CloseMenu /> : <OpenMenu />}
      </StyledMenu>

      <StyledLogo />

      <Links />

      <Contacts />

      <Theme />
    </Wrapper>
  );
};
