import styled from 'styled-components';

import { Theme } from './theme';
import { LanguageDropdown } from './language-dropdown';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Settings = () => {
  return (
    <Wrapper>
      <Theme />
      <LanguageDropdown />
    </Wrapper>
  );
};
