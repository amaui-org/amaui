import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotMonitorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotMonitorW100Filled'

      short_name='ScreenshotMonitor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.4 9.35h.7V7.1h2.25v-.7H5.4Zm10.25 6.25h2.95v-2.95h-.7v2.25h-2.25ZM9.3 19.7v-2h-6V4.3h17.4v13.4h-6v2Z"/>
    </Icon>
  );
});

IconMaterialScreenshotMonitorW100Filled.displayName = 'AmauiIconMaterialScreenshotMonitorW100Filled';

export default IconMaterialScreenshotMonitorW100Filled;
