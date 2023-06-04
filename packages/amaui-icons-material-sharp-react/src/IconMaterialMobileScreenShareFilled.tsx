import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobileScreenShareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileScreenShareFilled'

      short_name='MobileScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 15v-1.5q0-1.25.875-2.125T12 10.5h1v-2l3 3-3 3v-2h-1q-.425 0-.712.287-.288.288-.288.713V15Zm-4 8V1h14v22Zm2-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialMobileScreenShareFilled.displayName = 'AmauiIconMaterialMobileScreenShareFilled';

export default IconMaterialMobileScreenShareFilled;
