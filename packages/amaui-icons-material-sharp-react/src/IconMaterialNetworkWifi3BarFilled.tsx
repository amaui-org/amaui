import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifi3BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi3BarFilled'

      short_name='NetworkWifi3Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21 0 9q2.4-2.45 5.5-3.725T12 4q3.425 0 6.525 1.275Q21.625 6.55 24 9Zm-6.2-9.05q1.325-.95 2.9-1.488 1.575-.537 3.3-.537 1.725 0 3.3.537 1.575.538 2.9 1.488l2.9-2.9q-1.95-1.475-4.262-2.263Q14.525 6 12 6t-4.838.787Q4.85 7.575 2.9 9.05Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi3BarFilled.displayName = 'AmauiIconMaterialNetworkWifi3BarFilled';

export default IconMaterialNetworkWifi3BarFilled;
