import React from 'react';

import KeyframesContext from './Context';

export default function useKeyframes() {
  const value = React.useContext(KeyframesContext) as any;

  return value;
}
