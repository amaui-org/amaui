import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScannerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerW100'

      short_name='Scanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 18.7v-5.4h13.8L5.25 8.65l.2-.65 14.25 5.175V18.7ZM5 18h14v-4H5Zm5.2-1.65h7.15v-.7H10.2Zm-3.9.35h1.4v-1.4H6.3ZM5 18v-4 4Z"/>
    </Icon>
  );
});

IconMaterialScannerW100.displayName = 'AmauiIconMaterialScannerW100';

export default IconMaterialScannerW100;
