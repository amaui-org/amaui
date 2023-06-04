import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifi0BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi0BarW100Filled'

      short_name='SignalWifi0Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.85q-.15 0-.275-.05-.125-.05-.25-.175L2.35 9.5q-.2-.2-.187-.488.012-.287.237-.462 2.05-1.625 4.5-2.437Q9.35 5.3 12 5.3q2.65 0 5.1.813 2.45.812 4.5 2.437.225.175.238.462.012.288-.188.488l-9.125 9.125q-.125.125-.25.175-.125.05-.275.05Zm0-.7 9.1-9.1q-1.975-1.5-4.3-2.275Q14.475 6 12 6q-2.475 0-4.8.775-2.325.775-4.3 2.275Z"/>
    </Icon>
  );
});

IconMaterialSignalWifi0BarW100Filled.displayName = 'AmauiIconMaterialSignalWifi0BarW100Filled';

export default IconMaterialSignalWifi0BarW100Filled;
