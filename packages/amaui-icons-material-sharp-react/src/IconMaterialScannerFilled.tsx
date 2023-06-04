import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScannerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerFilled'

      short_name='Scanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20v-8h14.6L3.5 6.9 4.2 5 21 11.15V20Zm7-3h8v-2h-8Zm-4 0h2v-2H6Z"/>
    </Icon>
  );
});

IconMaterialScannerFilled.displayName = 'AmauiIconMaterialScannerFilled';

export default IconMaterialScannerFilled;
