import React from 'react';

import SnackbarsContext from './SnackbarsContext';
import { ISnackbars } from './SnackbarsProvider';

export default function useSnackbars(): ISnackbars {
  const value = React.useContext<ISnackbars>(SnackbarsContext);

  return value;
}
