import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQrCodeScannerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCodeScannerW100Filled'

      short_name='QrCodeScanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 7.05V3.3h3.75V4H4v3.05Zm0 13.65v-3.75H4V20h3.05v.7Zm13.65 0V20H20v-3.05h.7v3.75ZM20 7.05V4h-3.05v-.7h3.75v3.75Zm-3.225 9.725H17.9V17.9h-1.125Zm0-2.25H17.9v1.125h-1.125ZM15.65 15.65h1.125v1.125H15.65Zm-1.125 1.125h1.125V17.9h-1.125ZM13.4 15.65h1.125v1.125H13.4Zm2.25-2.25h1.125v1.125H15.65Zm-1.125 1.125h1.125v1.125h-1.125ZM13.4 13.4h1.125v1.125H13.4Zm4.5-7.3v4.5h-4.5V6.1Zm-7.3 7.3v4.5H6.1v-4.5Zm0-7.3v4.5H6.1V6.1Zm-.7 11.1v-3.1H6.8v3.1Zm0-7.3V6.8H6.8v3.1Zm7.3 0V6.8h-3.1v3.1Z"/>
    </Icon>
  );
});

IconMaterialQrCodeScannerW100Filled.displayName = 'AmauiIconMaterialQrCodeScannerW100Filled';

export default IconMaterialQrCodeScannerW100Filled;
