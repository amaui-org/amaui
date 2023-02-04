import React from 'react';

import AmauiZip from '@amaui/zip';

const zip = React.useCallback((value: string) => {
  return new AmauiZip(value);
}, []);
