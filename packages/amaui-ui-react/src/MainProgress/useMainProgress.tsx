import React from 'react';

import MainProgressContext from './Context';
import { IMainProgress } from './MainProgress';

export default function useMainProgress(): IMainProgress {
  const value = React.useContext<IMainProgress>(MainProgressContext);

  return value;
}
