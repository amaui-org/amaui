import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScannerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerW100Filled'

      short_name='Scanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 18.7v-5.4h13.8L5.25 8.65l.2-.65 14.25 5.175V18.7Zm5.9-2.35h7.15v-.7H10.2Zm-3.9.35h1.4v-1.4H6.3Z"/>
    </Icon>
  );
});

IconMaterialScannerW100Filled.displayName = 'AmauiIconMaterialScannerW100Filled';

export default IconMaterialScannerW100Filled;
