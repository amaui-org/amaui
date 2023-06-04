import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifi0BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi0BarW100'

      short_name='SignalWifi0Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.15 1.85 9q2.125-1.825 4.738-2.762Q9.2 5.3 12 5.3t5.413.938Q20.025 7.175 22.15 9Zm0-1 9.1-9.1q-1.975-1.5-4.3-2.275Q14.475 6 12 6q-2.475 0-4.8.775-2.325.775-4.3 2.275Z"/>
    </Icon>
  );
});

IconMaterialSignalWifi0BarW100.displayName = 'AmauiIconMaterialSignalWifi0BarW100';

export default IconMaterialSignalWifi0BarW100;
