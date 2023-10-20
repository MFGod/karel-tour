import Link from "next/link";
import styled from "styled-components";

import { names, routeHref } from "@/routes";

import { StyledHome } from "../../../../../public/images/icons/home/index";
import { StyledCatalog } from "../../../../../public/images/icons/catalog/index";
import { StyledAbout } from "../../../../../public/images/icons/about/index";
import { StyledGallery } from "../../../../../public/images/icons/gallery/index";


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



export const Links = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "home":
        return <StyledHome />;
      case "catalog":
        return <StyledCatalog />;
      case "about":
        return <StyledAbout />;
      case "gallery":
        return <StyledGallery />;
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
