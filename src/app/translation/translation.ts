export enum Languages {
  RU = 'Russian',
  EN = 'English',
}

export interface TranslationInterface {
  language: string;
  home: string;
  about: string;
  catalog: string;
  gallery: string;
  contacts: string;
}

const RU: TranslationInterface = {
  language: 'Язык',
  home: 'Главная',
  about: 'О нас',
  catalog: 'Каталог',
  gallery: 'Галерея',
  contacts: 'Контакты',
};
const EN: TranslationInterface = {
  language: 'Language',
  home: 'Home',
  about: 'About',
  catalog: 'Catalog',
  gallery: 'Gallery',
  contacts: 'Contacts',
};

export const translation = (
  language: string,
  key: keyof TranslationInterface
) => {
  switch (language) {
    case Languages.RU:
      return RU[key];
    case Languages.EN:
      return EN[key];
    default:
      return EN[key];
  }
};
