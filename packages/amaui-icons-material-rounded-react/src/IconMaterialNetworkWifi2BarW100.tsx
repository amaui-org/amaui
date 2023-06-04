import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifi2BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi2BarW100'

      short_name='NetworkWifi2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.475 13.625q.95-.7 2.1-1.088 1.15-.387 2.425-.387t2.425.387q1.15.388 2.1 1.088L21.1 9.05q-1.95-1.475-4.262-2.263Q14.525 6 12 6t-4.838.787Q4.85 7.575 2.9 9.05ZM12 18.85q-.15 0-.275-.05-.125-.05-.25-.175L2.35 9.5q-.2-.2-.187-.488.012-.287.237-.462 2-1.575 4.425-2.413Q9.25 5.3 12 5.3t5.175.837Q19.6 6.975 21.6 8.55q.225.175.238.462.012.288-.188.488l-9.125 9.125q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi2BarW100.displayName = 'AmauiIconMaterialNetworkWifi2BarW100';

export default IconMaterialNetworkWifi2BarW100;
