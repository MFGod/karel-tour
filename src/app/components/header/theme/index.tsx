import { ThemeContext, ThemeInterface } from '@/app/context/context';

import { useContext } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 36px;
`;

export const StyledText = styled.span`
  display: block;

  color: ${(props) => props.theme.text};
`;

export const StyledButton = styled.button<ThemeInterface>`
  position: relative;

  display: flex;
  margin: 0 auto;
  cursor: pointer;
  width: 56px;
  height: 30px;
  border-radius: 16px;
  border: 0.5px solid
    ${({ $themeMode }) => ($themeMode === 'light' ? '#ffffff' : '#000000')};

  background: ${({ $themeMode }) =>
    $themeMode === 'light' ? '#000000' : '#ffffff'};
`;

export const Circle = styled.div<ThemeInterface>`
  position: absolute;
  top: 3px;
  right: ${({ $themeMode }) =>
    $themeMode === 'light' ? '6px' : 'calc(100% - 22px - 6px)'};

  height: 22px;
  width: 22px;
  border-radius: 50%;

  background: ${({ theme }) => theme.bg};

  transition: 0.2s ease right;
`;

export const Theme = () => {
  const { themeMode, changeTheme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <StyledText>Theme</StyledText>
      <StyledButton $themeMode={themeMode} onClick={changeTheme}>
        <Circle $themeMode={themeMode} />
      </StyledButton>
    </Wrapper>
  );
};
