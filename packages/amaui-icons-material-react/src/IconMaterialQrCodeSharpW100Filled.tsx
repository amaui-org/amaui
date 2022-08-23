import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQrCodeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCodeSharpW100Filled'
      short_name='QrCode'

      {...props}
    >
      <path d="M4.3 11V4.3H11V11ZM5 10.3H10.3V5H5ZM4.3 19.7V13H11V19.7ZM5 19H10.3V13.7H5ZM13 11V4.3H19.7V11ZM13.7 10.3H19V5H13.7ZM18.025 19.7V18.025H19.7V19.7ZM13 14.675V13H14.675V14.675ZM14.675 16.35V14.675H16.35V16.35ZM13 18.025V16.35H14.675V18.025ZM14.675 19.7V18.025H16.35V19.7ZM16.35 18.025V16.35H18.025V18.025ZM16.35 14.675V13H18.025V14.675ZM18.025 16.35V14.675H19.7V16.35Z"/>
    </Icon>
  );
});

IconMaterialQrCodeSharpW100Filled.displayName = 'AmauiIconMaterialQrCodeSharpW100Filled';

export default IconMaterialQrCodeSharpW100Filled;
