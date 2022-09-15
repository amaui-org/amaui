import React from 'react';

import ConfirmContext from './ConfirmContext';
import { IConfirmProvider } from './ConfirmProvider';

export default function useConfirm(): IConfirmProvider {
  const value = React.useContext<IConfirmProvider>(ConfirmContext);

  return value;
}
