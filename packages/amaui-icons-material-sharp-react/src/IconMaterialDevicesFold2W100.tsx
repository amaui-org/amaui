import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesFold2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFold2W100'

      short_name='DevicesFold2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M253-172v-616h471l129 322H719v294H253Zm134-322h424L705-760H281l106 266ZM281-200h410v-266H368l-87-217v483Zm265-427Z"/>
    </Icon>
  );
});

IconMaterialDevicesFold2W100.displayName = 'AmauiIconMaterialDevicesFold2W100';

export default IconMaterialDevicesFold2W100;
