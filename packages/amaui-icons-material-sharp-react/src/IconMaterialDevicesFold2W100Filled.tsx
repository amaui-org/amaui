import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesFold2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFold2W100Filled'

      short_name='DevicesFold2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M253-172v-616h471l129 322H719v294H253Zm28-28h410v-266H368l-87-217v483Z"/>
    </Icon>
  );
});

IconMaterialDevicesFold2W100Filled.displayName = 'AmauiIconMaterialDevicesFold2W100Filled';

export default IconMaterialDevicesFold2W100Filled;
