import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotMonitor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotMonitor'

      short_name='ScreenshotMonitor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 10h1.5V7.5H9V6H5Zm10 6h4v-4h-1.5v2.5H15Zm-7 5v-2H2V3h20v16h-6v2Zm-4-4h16V5H4Zm0 0V5v12Z"/>
    </Icon>
  );
});

IconMaterialScreenshotMonitor.displayName = 'AmauiIconMaterialScreenshotMonitor';

export default IconMaterialScreenshotMonitor;
