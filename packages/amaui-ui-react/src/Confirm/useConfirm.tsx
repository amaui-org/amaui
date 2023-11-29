import React from 'react';

import ConfirmContext from './Context';
import { IConfirm } from './Confirm';

export default function useConfirm(): IConfirm {
  const value = React.useContext<IConfirm>(ConfirmContext);

  return value;
}
