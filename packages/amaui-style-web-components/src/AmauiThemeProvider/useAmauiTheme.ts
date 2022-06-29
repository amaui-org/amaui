import { AmauiTheme } from '@amaui/style';

const valueDefault = new AmauiTheme();

export default function useAmauiTheme(element: HTMLElement, amauiThemeElement = false) {
  const value = amauiThemeElement ? AmauiTheme.all(element).filter(item => item.element !== element)[0] : AmauiTheme.nearest(element);

  return value || valueDefault;
}
