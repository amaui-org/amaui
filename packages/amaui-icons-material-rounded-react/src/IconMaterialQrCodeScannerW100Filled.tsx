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
      <path d="M3.65 7.05q-.15 0-.25-.1t-.1-.25V4q0-.3.2-.5t.5-.2h2.7q.15 0 .25.1t.1.25q0 .15-.1.25T6.7 4H4v2.7q0 .15-.1.25t-.25.1ZM4 20.7q-.3 0-.5-.2t-.2-.5v-2.7q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V20h2.7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm13.3 0q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H20v-2.7q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V20q0 .3-.2.5t-.5.2Zm3.05-13.65q-.15 0-.25-.1T20 6.7V4h-2.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H20q.3 0 .5.2t.2.5v2.7q0 .15-.1.25t-.25.1Zm-3.575 9.725H17.9V17.9h-1.125Zm0-2.25H17.9v1.125h-1.125ZM15.65 15.65h1.125v1.125H15.65Zm-1.125 1.125h1.125V17.9h-1.125ZM13.4 15.65h1.125v1.125H13.4Zm2.25-2.25h1.125v1.125H15.65Zm-1.125 1.125h1.125v1.125h-1.125ZM13.4 13.4h1.125v1.125H13.4Zm4.5-7.3v4.5h-4.5V6.1Zm-7.3 7.3v4.5H6.1v-4.5Zm0-7.3v4.5H6.1V6.1Zm-.7 11.1v-3.1H6.8v3.1Zm0-7.3V6.8H6.8v3.1Zm7.3 0V6.8h-3.1v3.1Z"/>
    </Icon>
  );
});

IconMaterialQrCodeScannerW100Filled.displayName = 'AmauiIconMaterialQrCodeScannerW100Filled';

export default IconMaterialQrCodeScannerW100Filled;
