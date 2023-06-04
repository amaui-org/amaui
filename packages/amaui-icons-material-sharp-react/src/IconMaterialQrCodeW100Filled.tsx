import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQrCodeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCodeW100Filled'

      short_name='QrCode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 11V4.3H11V11Zm.7-.7h5.3V5H5Zm-.7 9.4V13H11v6.7ZM5 19h5.3v-5.3H5Zm8-8V4.3h6.7V11Zm.7-.7H19V5h-5.3Zm4.325 9.4v-1.675H19.7V19.7ZM13 14.675V13h1.675v1.675Zm1.675 1.675v-1.675h1.675v1.675ZM13 18.025V16.35h1.675v1.675Zm1.675 1.675v-1.675h1.675V19.7Zm1.675-1.675V16.35h1.675v1.675Zm0-3.35V13h1.675v1.675Zm1.675 1.675v-1.675H19.7v1.675Z"/>
    </Icon>
  );
});

IconMaterialQrCodeW100Filled.displayName = 'AmauiIconMaterialQrCodeW100Filled';

export default IconMaterialQrCodeW100Filled;
