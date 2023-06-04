import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesFoldW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFoldW100'

      short_name='DevicesFold'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.8 20.5V3.25L16.35.8v2.7h4.85v17Zm.7-1.375v-15.4 15.4Zm.175.675H20.5V4.2h-4.15v13.5ZM2.8 4.5v-1h1v1Zm0 16v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm4-4v-1h1v1Zm0 16v-1h1v1Zm4.7-1.375 4.15-1.875V1.85L11.5 3.725Z"/>
    </Icon>
  );
});

IconMaterialDevicesFoldW100.displayName = 'AmauiIconMaterialDevicesFoldW100';

export default IconMaterialDevicesFoldW100;
