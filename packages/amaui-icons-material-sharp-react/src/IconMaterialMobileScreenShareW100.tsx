import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobileScreenShareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileScreenShareW100'

      short_name='MobileScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 14.75V13.5q0-.975.688-1.663.687-.687 1.662-.687h1.25v-1.1l1.45 1.45-1.45 1.45v-1.1H12q-.675 0-1.162.487-.488.488-.488 1.163v1.25ZM6.3 21.7V2.3h11.4v19.4Zm.7-3.05h10V5.35H7ZM7 21h10v-1.65H7ZM7 4.65h10V3H7Zm0 0V3v1.65ZM7 21v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialMobileScreenShareW100.displayName = 'AmauiIconMaterialMobileScreenShareW100';

export default IconMaterialMobileScreenShareW100;
