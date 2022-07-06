import React from 'react';

import TransitionContext from './TransitionContext';

export default function useTransition() {
  const value = React.useContext(TransitionContext) as any;

  return value;
}
