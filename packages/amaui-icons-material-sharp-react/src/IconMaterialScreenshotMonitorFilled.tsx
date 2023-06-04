import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotMonitorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotMonitorFilled'

      short_name='ScreenshotMonitor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 10h1.5V7.5H9V6H5Zm10 6h4v-4h-1.5v2.5H15Zm-7 5v-2H2V3h20v16h-6v2Z"/>
    </Icon>
  );
});

IconMaterialScreenshotMonitorFilled.displayName = 'AmauiIconMaterialScreenshotMonitorFilled';

export default IconMaterialScreenshotMonitorFilled;
