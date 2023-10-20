export enum Languages {
  RU = 'Russian',
  EN = 'English',
}

interface TranslationInterface {
  language: string;
}

const RU: TranslationInterface = {
  language: 'Язык',
};
const EN: TranslationInterface = {
  language: 'Language',
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
