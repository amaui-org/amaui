import React from 'react';

import MainProgressContext from './MainProgressContext';
import { IMainProgressProvider } from './MainProgressProvider';

export default function useMainProgress(): IMainProgressProvider {
  const value = React.useContext<IMainProgressProvider>(MainProgressContext);

  return value;
}
