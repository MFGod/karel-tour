type TThemeStructure = {
  [Key in string]: {
    [SubKey in string]: string;
  };
};

export type TStyleLambda = (props: any) => string;

type TBuiltHelpers<T extends TThemeStructure> = {
  [Key in keyof T]: {
    [SubKey in keyof T[Key]]: TStyleLambda;
  };
};

export function buildThemeHelpers<Theme extends TThemeStructure>(
  theme: Theme
): TBuiltHelpers<Theme> {
  const result: any = {};
  for (const key in theme) {
    const sectionResult: any = {};
    for (const subKey in theme[key]) {
      sectionResult[subKey] = (props: any) => props.theme[key][subKey];
    }
    result[key] = sectionResult;
  }

  return result;
}
