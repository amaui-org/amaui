import { AmauiStyle } from '@amaui/style';

const valueDefault = new AmauiStyle();

export default function useAmauiStyle(element: HTMLElement) {
  const value = AmauiStyle.nearest(element);

  return value || valueDefault;
}
