import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScannerSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerSharpW100'
      short_name='Scanner'

      {...props}
    >
      <path d="M4.3 18.7V13.3H18.1L5.25 8.65L5.45 8L19.7 13.175V18.7ZM5 18H19V14H5ZM10.2 16.35H17.35V15.65H10.2ZM6.3 16.7H7.7V15.3H6.3ZM5 18V14V18Z"/>
    </Icon>
  );
});

IconMaterialScannerSharpW100.displayName = 'AmauiIconMaterialScannerSharpW100';

export default IconMaterialScannerSharpW100;
