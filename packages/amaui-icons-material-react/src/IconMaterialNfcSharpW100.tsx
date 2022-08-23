import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNfcSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NfcSharpW100'
      short_name='Nfc'

      {...props}
    >
      <path d="M8.3 15.7H15.7V8.3H12.35Q12.05 8.3 11.85 8.5Q11.65 8.7 11.65 9V11.3Q11.5 11.375 11.35 11.537Q11.2 11.7 11.2 12Q11.2 12.35 11.413 12.575Q11.625 12.8 12 12.8Q12.3 12.8 12.55 12.575Q12.8 12.35 12.8 12Q12.8 11.7 12.65 11.537Q12.5 11.375 12.35 11.3V9H15V15H9V9H10V8.3H8.3ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterialNfcSharpW100.displayName = 'AmauiIconMaterialNfcSharpW100';

export default IconMaterialNfcSharpW100;
