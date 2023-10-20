import Link from 'next/link';
import styled from 'styled-components';

import { StyledIHome } from '../../../../../public/images/icons/home';
import { StyledICatalog } from '../../../../../public/images/icons/catalog';
import { StyledIAbout } from '../../../../../public/images/icons/about';
import { StyledIGallery } from '../../../../../public/images/icons/gallery';
import { StyledIContacts } from '../../../../../public/images/icons/contacts';

import { names, routeHref } from '@/routes';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-wrap: nowrap;
  column-gap: 24px;
  list-style: none;
`;

const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;

  min-width: 224px;
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

export const Links = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'home':
        return <StyledIHome />;
      case 'catalog':
        return <StyledICatalog />;
      case 'about':
        return <StyledIAbout />;
      case 'gallery':
        return <StyledIGallery />;
      case 'contacts':
        return <StyledIContacts />;
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
