import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScannerSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerSharp'
      short_name='Scanner'

      {...props}
    >
      <path d="M3 20V12H17.6L3.5 6.9L4.2 5L21 11.15V20ZM5 18H19V14H5ZM10 17H18V15H10ZM6 17H8V15H6ZM5 18V14V18Z"/>
    </Icon>
  )
});

export default IconMaterialScannerSharp;
