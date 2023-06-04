import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesFoldFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFoldFilled'

      short_name='DevicesFold'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22 21H10V2.975l7-3.05V3h5Zm-7.325-2H20V5h-3v13.025ZM2 5V3h2v2Zm0 16v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm4-4V3h2v2Zm0 16v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialDevicesFoldFilled.displayName = 'AmauiIconMaterialDevicesFoldFilled';

export default IconMaterialDevicesFoldFilled;
