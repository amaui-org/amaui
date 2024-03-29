import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeviceHub = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceHub'

      short_name='DeviceHub'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-5h4l4-4V8.8q-.9-.325-1.45-1.088Q9 6.95 9 6q0-1.25.875-2.125T12 3q1.25 0 2.125.875T15 6q0 .95-.55 1.712Q13.9 8.475 13 8.8V12l4 4h4v5h-5v-3.05l-4-4-4 4V21Z"/>
    </Icon>
  );
});

IconMaterialDeviceHub.displayName = 'AmauiIconMaterialDeviceHub';

export default IconMaterialDeviceHub;
