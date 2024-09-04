import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesFold2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFold2Filled'

      short_name='DevicesFold2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120v-720h558l160 400H760v320H200Zm80-80h400v-240H322l-42-105v345Z"/>
    </Icon>
  );
});

IconMaterialDevicesFold2Filled.displayName = 'AmauiIconMaterialDevicesFold2Filled';

export default IconMaterialDevicesFold2Filled;
