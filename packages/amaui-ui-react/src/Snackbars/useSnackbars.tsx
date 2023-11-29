import React from 'react';

import SnackbarsContext from './Context';
import { ISnackbars } from './Snackbars';

export default function useSnackbars(): ISnackbars {
  const value = React.useContext<ISnackbars>(SnackbarsContext);

  return value;
}
