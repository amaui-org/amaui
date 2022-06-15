import { useContext } from 'react';

import { AmauiStyle } from '@amaui/style';

import AmauiStyleContext from './AmauiStyleContext';

export default function useAmauiStyle(): AmauiStyle {
  const value = useContext(AmauiStyleContext) as AmauiStyle;

  return value;
}
