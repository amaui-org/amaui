import { AmauiTheme } from '@amaui/style';

const valueDefault = new AmauiTheme();

export default function useAmauiTheme(element: HTMLElement) {
  const value = AmauiTheme.nearest(element);

  return value || valueDefault;
}
