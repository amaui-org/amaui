import React from 'react';

import { reset } from '@amaui/style-react';

const useReset = reset();

const Reset = (props: any) => {
  const { children } = props;

  useReset();

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

Reset.displayName = 'AmauiReset';

export default Reset;
