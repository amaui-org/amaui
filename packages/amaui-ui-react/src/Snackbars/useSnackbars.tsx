import React from 'react';

import SnackbarsContext from './SnackbarsContext';
import { ISnackbarsProvider } from './SnackbarsProvider';

export default function useSnackbars(): ISnackbarsProvider {
  const value = React.useContext<ISnackbarsProvider>(SnackbarsContext);

  return value;
}
