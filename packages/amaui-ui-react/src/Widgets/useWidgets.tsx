import React from 'react';

import WidgetsContext from './WidgetsContext';
import { IWidgetsProvider } from './WidgetsProvider';

export default function useWidgets(): IWidgetsProvider {
  const value = React.useContext<IWidgetsProvider>(WidgetsContext);

  return value;
}
