import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesFold2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFold2'

      short_name='DevicesFold2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120v-720h558l160 400H760v320H200Zm176-400h424l-96-240H280l96 240Zm-96 320h400v-240H322l-42-105v345Zm260-440Z"/>
    </Icon>
  );
});

IconMaterialDevicesFold2.displayName = 'AmauiIconMaterialDevicesFold2';

export default IconMaterialDevicesFold2;
