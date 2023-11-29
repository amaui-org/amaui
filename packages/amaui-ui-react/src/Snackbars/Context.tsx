import React from 'react';

import { ISnackbar } from '../Snackbar/Snackbar';

export interface ISnackbarsContext {
  add: (value: ISnackbar) => void;
  remove: (id: string) => void;
}

const AmauiSnackbarsContext: any = React.createContext<ISnackbarsContext>({} as any);

export default AmauiSnackbarsContext;
