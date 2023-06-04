import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQrCode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCode'

      short_name='QrCode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 11V3h8v8Zm2-2h4V5H5ZM3 21v-8h8v8Zm2-2h4v-4H5Zm8-8V3h8v8Zm2-2h4V5h-4Zm4 12v-2h2v2Zm-6-6v-2h2v2Zm2 2v-2h2v2Zm-2 2v-2h2v2Zm2 2v-2h2v2Zm2-2v-2h2v2Zm0-4v-2h2v2Zm2 2v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialQrCode.displayName = 'AmauiIconMaterialQrCode';

export default IconMaterialQrCode;
