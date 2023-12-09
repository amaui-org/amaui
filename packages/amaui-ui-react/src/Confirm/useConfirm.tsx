import React from 'react';

import ConfirmContext from './Context';
import { IConfirmValue } from './Confirm';

export default function useConfirm(): IConfirmValue {
  const value = React.useContext<IConfirmValue>(ConfirmContext);

  return value;
}
