import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQrCodeScannerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCodeScannerSharpFilled'
      short_name='QrCodeScanner'

      {...props}
    >
      <path d="M2 7V2H7V4H4V7ZM2 22V17H4V20H7V22ZM17 22V20H20V17H22V22ZM20 7V4H17V2H22V7ZM17.5 17.5H19V19H17.5ZM17.5 14.5H19V16H17.5ZM16 16H17.5V17.5H16ZM14.5 17.5H16V19H14.5ZM13 16H14.5V17.5H13ZM16 13H17.5V14.5H16ZM14.5 14.5H16V16H14.5ZM13 13H14.5V14.5H13ZM19 5V11H13V5ZM11 13V19H5V13ZM11 5V11H5V5ZM9.5 17.5V14.5H6.5V17.5ZM9.5 9.5V6.5H6.5V9.5ZM17.5 9.5V6.5H14.5V9.5Z"/>
    </Icon>
  );
});

IconMaterialQrCodeScannerSharpFilled.displayName = 'AmauiIconMaterialQrCodeScannerSharpFilled';

export default IconMaterialQrCodeScannerSharpFilled;
