import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifi3BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi3BarW100Filled'

      short_name='NetworkWifi3Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.15 1.85 9q2.075-1.775 4.638-2.738Q9.05 5.3 12 5.3q2.95 0 5.513.962Q20.075 7.225 22.15 9Zm-6.2-7.2q1.325-.95 2.9-1.488 1.575-.537 3.3-.537 1.725 0 3.3.537 1.575.538 2.9 1.488l2.9-2.9q-1.95-1.475-4.262-2.263Q14.525 6 12 6t-4.838.787Q4.85 7.575 2.9 9.05Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi3BarW100Filled.displayName = 'AmauiIconMaterialNetworkWifi3BarW100Filled';

export default IconMaterialNetworkWifi3BarW100Filled;
