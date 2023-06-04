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
      <path d="M12 19.15 1.85 9q2.125-1.825 4.738-2.762Q9.2 5.3 12 5.3t5.413.938Q20.025 7.175 22.15 9Z"/>
    </Icon>
  );
});

IconMaterialSignalWifi4BarW100Filled.displayName = 'AmauiIconMaterialSignalWifi4BarW100Filled';

export default IconMaterialSignalWifi4BarW100Filled;
