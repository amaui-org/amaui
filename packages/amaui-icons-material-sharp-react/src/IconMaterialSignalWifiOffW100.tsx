import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifiOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiOffW100'

      short_name='SignalWifiOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.55 21.55-5.5-5.5-3.05 3.1L1.85 9q.825-.75 1.775-1.338.95-.587 1.975-1.062L2.45 3.45l.5-.5 18.1 18.1Zm-3.575-7.4L8.5 5.675q.875-.2 1.75-.288Q11.125 5.3 12 5.3q2.8 0 5.413.938Q20.025 7.175 22.15 9Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiOffW100.displayName = 'AmauiIconMaterialSignalWifiOffW100';

export default IconMaterialSignalWifiOffW100;
