export enum Language {
  RU = 'Russian',
  ENG = 'English',
}
interface translationInterface {

}

const RU: translationInterface = {

};
const EN: translationInterface = {

};

export const translation = (
  language: string,
  key: keyof translationInterface
) => {
  switch (language) {
    case Language.RU:
      return RU[key];
    default:
      return EN[key];
  }
};
