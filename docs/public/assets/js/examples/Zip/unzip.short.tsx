import React from 'react';

import AmauiZip from '@amaui/zip';

const unzip = React.useCallback((value: string) => {
  return AmauiZip.decode(value);
}, []);
