import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesFoldW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFoldW100Filled'

      short_name='DevicesFold'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.2 20.5H10.8V3.25L16.35.8v2.7h4.85Zm-9.525-.7H20.5V4.2h-4.15v13.5ZM2.8 4.5v-1h1v1Zm0 16v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm4-4v-1h1v1Zm0 16v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialDevicesFoldW100Filled.displayName = 'AmauiIconMaterialDevicesFoldW100Filled';

export default IconMaterialDevicesFoldW100Filled;
