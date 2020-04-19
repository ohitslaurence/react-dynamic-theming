import { themes } from './index';

export interface ITheme {
  [key: string]: string;
}

export interface IThemes {
  [key: string]: ITheme;
}

export interface IMappedTheme {
  [key: string]: string | null;
}

export const mapTheme: (variables: ITheme) => IMappedTheme = (
  variables: ITheme
) => {
  return {
    '--color-primary': variables.primary || '',
    '--color-secondary': variables.secondary || '',
    '--color-positive': variables.positive || '',
    '--color-text-primary': variables.textPrimary || '',
    '--background-primary': variables.backgroundPrimary || '',
    '--background-sec': variables.backgroundSecondary || '',
  };
};

export const extend: (extending: ITheme, newTheme: ITheme) => ITheme = (
  extending: ITheme,
  newTheme: ITheme
): ITheme => {
  return { ...extending, ...newTheme };
};

/**
 * Helper function to set a new theme
 *
 * @param {string} theme The name of the theme to be set
 *
 * @return {void}
 */
export const applyTheme = (theme: string): void => {
  const themeObject: IMappedTheme = mapTheme(themes[theme]);
  if (!themeObject) return;
  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    if (property === 'name') {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
  });
};
