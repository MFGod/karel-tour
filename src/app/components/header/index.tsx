import { useContext } from 'react';
import styled from 'styled-components';

import { NavigationContext } from '@/app/context/context';

import { Links } from './links';
import {
  OpenMenu,
  StyledOpenMenu,
} from '../../../../public/images/icons/menu/open';
import {
  CloseMenu,
  StyledCloseMenu,
} from '../../../../public/images/icons/menu/close';
import { Logo } from '../../../../public/images/icons/logo';
import { Contacts } from './contacts';
import { Settings } from './settings';

interface IMenuProps {
  open: boolean;
}

const StyledLogo = styled(Logo)`
  width: 163px;
  height: 120px;
`;

export const Wrapper = styled.header<IMenuProps>`
  position: absolute;
  top: 65px;
  left: 85px;
  right: 85px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 16px;

  background: #09271938;
  backdrop-filter: blur(10px);
  border-radius: 60px;

  transition: transform 0.3s ease-in-out;
`;

export const StyledMenu = styled.div<IMenuProps>`
  position: absolute;
  top: 2%;
  right: 2%;

  display: flex;
  align-items: center;

  border-radius: 6px;
  padding: 6px;

  background-color: #ffffff92;
`;

export const Header = () => {
  const { open, toggleMenu } = useContext(NavigationContext);

  return (
    <>
      {open && (
        <Wrapper open={open}>
          <StyledLogo />

          <Links />

          <Settings />
          <StyledCloseMenu open={open} onClick={toggleMenu} />
        </Wrapper>
      )}
      {open || <StyledOpenMenu open={open} onClick={toggleMenu} />}
    </>
  );
};
