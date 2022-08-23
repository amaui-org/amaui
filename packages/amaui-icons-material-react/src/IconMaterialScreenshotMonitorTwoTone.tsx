import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenshotMonitorTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotMonitorTwoTone'
      short_name='ScreenshotMonitor'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M4,17h16V5H4V17z M15,14.5h2.5V12H19v4h-4V14.5z M5,6h4v1.5H6.5V10H5V6z" opacity=".3"/><path d="M20,3H4C2.89,3,2,3.89,2,5v12c0,1.1,0.89,2,2,2h4v2h8v-2h4c1.1,0,2-0.9,2-2V5C22,3.89,21.1,3,20,3z M20,17H4V5h16V17z"/><polygon points="6.5,7.5 9,7.5 9,6 5,6 5,10 6.5,10"/><polygon points="19,12 17.5,12 17.5,14.5 15,14.5 15,16 19,16"/></g></g>
    </Icon>
  );
});

IconMaterialScreenshotMonitorTwoTone.displayName = 'AmauiIconMaterialScreenshotMonitorTwoTone';

export default IconMaterialScreenshotMonitorTwoTone;
