import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenshotMonitorSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotMonitorSharp'
      short_name='ScreenshotMonitor'

      {...props}
    >
      <path d="M5 10H6.5V7.5H9V6H5ZM15 16H19V12H17.5V14.5H15ZM8 21V19H2V3H22V19H16V21ZM4 17H20V5H4ZM4 17V5V17Z"/>
    </Icon>
  );
});

IconMaterialScreenshotMonitorSharp.displayName = 'AmauiIconMaterialScreenshotMonitorSharp';

export default IconMaterialScreenshotMonitorSharp;
