import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBarcodeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeSharpW100'
      short_name='Barcode'

      {...props}
    >
      <path d="M3.2 6.9h1.6v11.2H3.2Zm4.8 0h.8v11.2H8Zm-2.4 0h1.6v11.2H5.6Zm12.8 0h2.4v11.2h-2.4Zm-8 0H12v11.2h-1.6Zm5.6 0h.8v11.2H16Zm-3.2 0h2.4v11.2h-2.4Z"/>
    </Icon>
  );
});

IconMaterialBarcodeSharpW100.displayName = 'AmauiIconMaterialBarcodeSharpW100';

export default IconMaterialBarcodeSharpW100;
