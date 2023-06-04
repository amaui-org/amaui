import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifiStatusbarNull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiStatusbarNull'

      short_name='SignalWifiStatusbarNull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21 0 9q2.375-2.425 5.487-3.713Q8.6 4 12 4t6.512 1.287Q21.625 6.575 24 9Zm0-2.85 9.1-9.1q-1.975-1.5-4.3-2.275Q14.475 6 12 6q-2.475 0-4.8.775-2.325.775-4.3 2.275Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiStatusbarNull.displayName = 'AmauiIconMaterialSignalWifiStatusbarNull';

export default IconMaterialSignalWifiStatusbarNull;
