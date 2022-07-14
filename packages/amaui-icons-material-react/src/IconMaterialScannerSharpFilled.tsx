import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScannerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerSharpFilled'
      short_name='Scanner'

      {...props}
    >
      <path d="M3 20V12H17.6L3.5 6.9L4.2 5L21 11.15V20ZM10 17H18V15H10ZM6 17H8V15H6Z"/>
    </Icon>
  );
});

export default IconMaterialScannerSharpFilled;
