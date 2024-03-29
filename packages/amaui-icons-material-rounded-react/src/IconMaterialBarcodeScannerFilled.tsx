import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBarcodeScannerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarcodeScannerFilled'

      short_name='BarcodeScanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 3h5v2H3v3H1Zm17 0h5v5h-2V5h-3Zm3 16v-3h2v5h-5v-2ZM3 16v3h3v2H1v-5ZM7 6h1v12H7ZM4 6h2v12H4Zm6 0h2v12h-2Zm7 0h1v12h-1Zm2 0h1v12h-1Zm-6 0h3v12h-3Z"/>
    </Icon>
  );
});

IconMaterialBarcodeScannerFilled.displayName = 'AmauiIconMaterialBarcodeScannerFilled';

export default IconMaterialBarcodeScannerFilled;
