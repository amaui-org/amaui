import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifiW100Filled'

      short_name='NetworkWifi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.15 1.85 9q2.075-1.775 4.638-2.738Q9.05 5.3 12 5.3q2.95 0 5.513.962Q20.075 7.225 22.15 9ZM4.35 10.5q1.625-1.175 3.563-1.838Q9.85 8 12 8q2.15 0 4.088.662 1.937.663 3.562 1.838l1.45-1.45q-1.95-1.475-4.262-2.263Q14.525 6 12 6t-4.838.787Q4.85 7.575 2.9 9.05Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifiW100Filled.displayName = 'AmauiIconMaterialNetworkWifiW100Filled';

export default IconMaterialNetworkWifiW100Filled;
