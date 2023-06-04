import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobileScreenShare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileScreenShare'

      short_name='MobileScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 15v-1.5q0-1.25.875-2.125T12 10.5h1v-2l3 3-3 3v-2h-1q-.425 0-.712.287-.288.288-.288.713V15Zm-4 8V1h14v22Zm2-5h10V6H7Zm0 3h10v-1H7ZM7 4h10V3H7Zm0 0V3v1Zm0 17v-1 1Z"/>
    </Icon>
  );
});

IconMaterialMobileScreenShare.displayName = 'AmauiIconMaterialMobileScreenShare';

export default IconMaterialMobileScreenShare;
