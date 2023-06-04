import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesFold = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFold'

      short_name='DevicesFold'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 21V2.975l7-3.05V3h5v18Zm2-3.025V4.3v13.675ZM14.675 19H20V5h-3v13.025ZM2 5V3h2v2Zm0 16v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm4-4V3h2v2Zm0 16v-2h2v2Zm6-3.025 3-1.3V3l-3 1.3Z"/>
    </Icon>
  );
});

IconMaterialDevicesFold.displayName = 'AmauiIconMaterialDevicesFold';

export default IconMaterialDevicesFold;
