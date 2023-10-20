import { FC, useState } from 'react';

import { LanguageDropdown } from './language-dropdown';
import { Theme } from './theme';
import styled from 'styled-components';
import { StyledISettings } from '../../../../../public/images/icons/settings';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: max-content;
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 10px;
  padding: 10px;

  border: none;
  background-color: transparent;

  color: ${(props) => props.theme.text};

  font-size: 36px;

  cursor: pointer;
`;

export const Settings: FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const changeDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Wrapper>
      <StyledButton onClick={changeDropdown}>
        <StyledISettings />
        Settings
      </StyledButton>

      {dropdownOpen && (
        <>
          <Theme />
          <LanguageDropdown />
        </>
      )}
    </Wrapper>
  );
};
