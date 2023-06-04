import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBarcodeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeW100Filled'

      short_name='Barcode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.2 6.9h1.6v11.2H3.2Zm4.8 0h.8v11.2H8Zm-2.4 0h1.6v11.2H5.6Zm12.8 0h2.4v11.2h-2.4Zm-8 0H12v11.2h-1.6Zm5.6 0h.8v11.2H16Zm-3.2 0h2.4v11.2h-2.4Z"/>
    </Icon>
  );
});

IconMaterialBarcodeW100Filled.displayName = 'AmauiIconMaterialBarcodeW100Filled';

export default IconMaterialBarcodeW100Filled;
