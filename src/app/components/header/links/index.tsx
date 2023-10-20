import Link from 'next/link';
import styled from 'styled-components';

import { names, routeHref } from '@/routes';

import { About } from '../../../../../public/images/icons/about';
import { Home } from '../../../../../public/images/icons/home';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-wrap: nowrap;
  column-gap: 24px;
  padding: 0px;
  list-style: none;
`;

const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 10px;

  font-size: 36px;
  text-decoration: none;
  border-radius: 6px;

  color: ${(props) => props.theme.text};

  &:hover {
    background-color: #08571d8a;
  }

  &:active {
    background-color: #0d913089;
  }
`;

const StyledHome = styled(Home)`
  width: 36px;
  height: 36px;
`;

const StyledAbout = styled(About)`
  width: 36px;
  height: 36px;
`;
export const Links = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'home':
        return <StyledHome />;
      case 'about':
        return <StyledAbout />;

      default:
        return null;
    }
  };

  return (
    <List>
      {(Object.entries(routeHref) as Entries<typeof names>).map(
        ([name, href], index) => (
          <li key={index}>
            <Link href={href} passHref legacyBehavior>
              <Anchor>
                {getIcon(name)}
                {names[name]}
              </Anchor>
            </Link>
          </li>
        )
      )}
    </List>
  );
};
