import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNfcW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NfcW100Filled'

      short_name='Nfc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 15.7h7.4V8.3h-3.35q-.3 0-.5.2t-.2.5v2.3q-.15.075-.3.237-.15.163-.15.463 0 .35.213.575.212.225.587.225.3 0 .55-.225.25-.225.25-.575 0-.3-.15-.463-.15-.162-.3-.237V9H15v6H9V9h1v-.7H8.3Zm-4 4V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialNfcW100Filled.displayName = 'AmauiIconMaterialNfcW100Filled';

export default IconMaterialNfcW100Filled;
