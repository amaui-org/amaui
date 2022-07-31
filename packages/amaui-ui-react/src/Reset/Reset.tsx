import React from 'react';

import { reset } from '@amaui/style-react';

const useReset = reset();

export default function Reset(props) {
  const { children } = props;

  useReset();

  return (
    <React.Fragment>

      {children}

    </React.Fragment>
  );
}
