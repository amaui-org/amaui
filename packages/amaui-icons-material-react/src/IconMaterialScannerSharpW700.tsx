import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScannerSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerSharpW700'
      short_name='Scanner'

      {...props}
    >
      <path d="M1.65 21.15V10.85H14.575L2.4 6.45L3.35 3.85L22.35 10.8V21.15ZM4.8 18H19.2V14H4.8ZM9.8 17H18.2V15H9.8ZM5.8 17H7.8V15H5.8ZM4.8 18V14V18Z"/>
    </Icon>
  )
});

export default IconMaterialScannerSharpW700;
