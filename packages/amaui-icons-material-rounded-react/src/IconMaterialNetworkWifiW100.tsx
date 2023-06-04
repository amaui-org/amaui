import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifiW100'

      short_name='NetworkWifi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.85q-.15 0-.275-.05-.125-.05-.25-.175L2.35 9.5q-.2-.2-.187-.488.012-.287.237-.462 2-1.575 4.425-2.413Q9.25 5.3 12 5.3t5.175.837Q19.6 6.975 21.6 8.55q.225.175.238.462.012.288-.188.488l-9.125 9.125q-.125.125-.25.175-.125.05-.275.05ZM4.35 10.5q1.625-1.175 3.563-1.838Q9.85 8 12 8q2.15 0 4.088.662 1.937.663 3.562 1.838l1.45-1.45q-1.95-1.475-4.262-2.263Q14.525 6 12 6t-4.838.787Q4.85 7.575 2.9 9.05Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifiW100.displayName = 'AmauiIconMaterialNetworkWifiW100';

export default IconMaterialNetworkWifiW100;
