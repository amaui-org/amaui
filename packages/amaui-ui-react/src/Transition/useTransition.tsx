import React from 'react';

import TransitionContext from './Context';

export default function useTransition() {
  const value = React.useContext(TransitionContext) as any;

  return value;
}
