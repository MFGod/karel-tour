import { useContext, useState } from 'react';
import styled from 'styled-components';

import { LanguageContext } from '@/app/context/context';
import { Languages } from '@/app/translation/translation';

interface DropdownInterface {
  open: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;

  height: max-content;

  padding: 10px;
`;

const Text = styled.span`
  display: block;

  font-size: 26px;

  color: ${(props) => props.theme.text};
`;

const StyledButton = styled.button`
  position: relative;

  border: 0.3px solid #989898;
  border-radius: 6px;

  padding: 6px;

  cursor: pointer;
`;

const Dropdown = styled.ul<DropdownInterface>`
  display: ${(props) => (props.open ? 'block' : 'none')};

  height: max-content;
  padding: 0.5em;

  border: 1px solid #ddd;
  list-style: none;

  background: #fff;
`;

const DropdownItem = styled.li`
  padding: 0.5em;
`;

export const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const languageContext = useContext(LanguageContext);

  const handleLanguageSelect = (lang: string) => {
    languageContext.changeLanguage(lang as Languages);
    setSelectedLanguage(lang);
    setLanguageDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  return (
    <Wrapper>
      <Text>Language:</Text>
      <StyledButton onClick={toggleDropdown}>
        {selectedLanguage || 'Select a language'}
        <Dropdown open={languageDropdownOpen}>
          {Object.values(Languages).map((lang) => (
            <DropdownItem
              key={lang}
              onClick={() => handleLanguageSelect(lang as Languages)}
            >
              {lang}
            </DropdownItem>
          ))}
        </Dropdown>
      </StyledButton>
    </Wrapper>
  );
};
