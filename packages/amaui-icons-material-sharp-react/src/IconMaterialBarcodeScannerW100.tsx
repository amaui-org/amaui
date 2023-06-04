import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBarcodeScannerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeScannerW100'

      short_name='BarcodeScanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.65 3.65h3.7v.7h-3v3h-.7Zm17 0h3.7v3.7h-.7v-3h-3Zm3 16v-3h.7v3.7h-3.7v-.7Zm-19.3-3v3h3v.7h-3.7v-3.7ZM7 6h1v12H7ZM4 6h2v12H4Zm6 0h2v12h-2Zm7 0h1v12h-1Zm2 0h1v12h-1Zm-6 0h3v12h-3Z"/>
    </Icon>
  );
});

IconMaterialBarcodeScannerW100.displayName = 'AmauiIconMaterialBarcodeScannerW100';

export default IconMaterialBarcodeScannerW100;
