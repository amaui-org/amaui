import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNfcW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NfcW100'

      short_name='Nfc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 15.7h7.4V8.3h-3.35q-.3 0-.5.2t-.2.5v2.3q-.15.075-.3.237-.15.163-.15.463 0 .35.213.575.212.225.587.225.3 0 .55-.225.25-.225.25-.575 0-.3-.15-.463-.15-.162-.3-.237V9H15v6H9V9h1v-.7H8.3Zm-4 4V4.3h15.4v15.4ZM5 19h14V5H5ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterialNfcW100.displayName = 'AmauiIconMaterialNfcW100';

export default IconMaterialNfcW100;
