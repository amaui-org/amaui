import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeviceHubSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceHubSharp'
      short_name='DeviceHub'

      {...props}
    >
      <path d="M3 21V16H7L11 12V8.8Q10.1 8.475 9.55 7.712Q9 6.95 9 6Q9 4.75 9.875 3.875Q10.75 3 12 3Q13.25 3 14.125 3.875Q15 4.75 15 6Q15 6.95 14.45 7.712Q13.9 8.475 13 8.8V12L17 16H21V21H16V17.95L12 13.95L8 17.95V21Z"/>
    </Icon>
  );
});

IconMaterialDeviceHubSharp.displayName = 'AmauiIconMaterialDeviceHubSharp';

export default IconMaterialDeviceHubSharp;
