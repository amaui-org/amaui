import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifi = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi'

      short_name='NetworkWifi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21 0 9q2.4-2.45 5.5-3.725T12 4q3.425 0 6.525 1.275Q21.625 6.55 24 9ZM4.35 10.5q1.625-1.175 3.563-1.838Q9.85 8 12 8q2.15 0 4.088.662 1.937.663 3.562 1.838l1.45-1.45q-1.95-1.475-4.262-2.263Q14.525 6 12 6t-4.838.787Q4.85 7.575 2.9 9.05Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi.displayName = 'AmauiIconMaterialNetworkWifi';

export default IconMaterialNetworkWifi;
