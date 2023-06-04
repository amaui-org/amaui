import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQrCode2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCode2Filled'

      short_name='QrCode2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 21v-2h2v2Zm-2-2v-5h2v5Zm8-3v-4h2v4Zm-2-4v-2h2v2ZM5 14v-2h2v2Zm-2-2v-2h2v2Zm9-7V3h2v2ZM4.5 7.5h3v-3h-3ZM3 9V3h6v6Zm1.5 10.5h3v-3h-3ZM3 21v-6h6v6ZM16.5 7.5h3v-3h-3ZM15 9V3h6v6Zm2 12v-3h-2v-2h4v3h2v2Zm-4-7v-2h4v2Zm-4 0v-2H7v-2h6v2h-2v2Zm1-5V5h2v2h2v2ZM5.25 6.75v-1.5h1.5v1.5Zm0 12v-1.5h1.5v1.5Zm12-12v-1.5h1.5v1.5Z"/>
    </Icon>
  );
});

IconMaterialQrCode2Filled.displayName = 'AmauiIconMaterialQrCode2Filled';

export default IconMaterialQrCode2Filled;
