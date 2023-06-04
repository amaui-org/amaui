import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifi4BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi4BarW100Filled'

      short_name='SignalWifi4Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.85q-.15 0-.275-.05-.125-.05-.25-.175L2.35 9.5q-.2-.2-.2-.475 0-.275.225-.45Q4.45 6.95 6.9 6.125 9.35 5.3 12 5.3q2.65 0 5.1.825 2.45.825 4.525 2.45.225.175.225.45t-.2.475l-9.125 9.125q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialSignalWifi4BarW100Filled.displayName = 'AmauiIconMaterialSignalWifi4BarW100Filled';

export default IconMaterialSignalWifi4BarW100Filled;
