import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQrCodeScanner = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCodeScanner'

      short_name='QrCodeScanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 7V2h5v2H4v3Zm0 15v-5h2v3h3v2Zm15 0v-2h3v-3h2v5Zm3-15V4h-3V2h5v5Zm-2.5 10.5H19V19h-1.5Zm0-3H19V16h-1.5ZM16 16h1.5v1.5H16Zm-1.5 1.5H16V19h-1.5ZM13 16h1.5v1.5H13Zm3-3h1.5v1.5H16Zm-1.5 1.5H16V16h-1.5ZM13 13h1.5v1.5H13Zm6-8v6h-6V5Zm-8 8v6H5v-6Zm0-8v6H5V5ZM9.5 17.5v-3h-3v3Zm0-8v-3h-3v3Zm8 0v-3h-3v3Z"/>
    </Icon>
  );
});

IconMaterialQrCodeScanner.displayName = 'AmauiIconMaterialQrCodeScanner';

export default IconMaterialQrCodeScanner;
