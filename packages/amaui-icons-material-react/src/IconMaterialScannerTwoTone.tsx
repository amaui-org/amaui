import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScannerTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerTwoTone'
      short_name='Scanner'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 14v4h14v-4H5zm3 3H6v-2h2v2zm10 0h-8v-2h8v2z" opacity=".3"/><path d="M19.8 10.7L4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM19 18H5v-4h14v4zM6 15h2v2H6zm4 0h8v2h-8z"/>
    </Icon>
  );
});

IconMaterialScannerTwoTone.displayName = 'AmauiIconMaterialScannerTwoTone';

export default IconMaterialScannerTwoTone;
