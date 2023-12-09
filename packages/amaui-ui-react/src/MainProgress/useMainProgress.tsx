import React from 'react';

import MainProgressContext from './Context';
import { IMainProgressValue } from './MainProgress';

export default function useMainProgress(): IMainProgressValue {
  const value = React.useContext<IMainProgressValue>(MainProgressContext);

  return value;
}
