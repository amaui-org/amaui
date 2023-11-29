import React from 'react';

import WidgetsContext from './Context';
import { IWidgets } from './Widgets';

export default function useWidgets(): IWidgets {
  const value = React.useContext<IWidgets>(WidgetsContext);

  return value;
}
