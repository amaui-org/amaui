import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifi1BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi1BarFilled'

      short_name='NetworkWifi1Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21 0 9q2.4-2.45 5.5-3.725T12 4q3.425 0 6.525 1.275Q21.625 6.55 24 9Zm-2.975-5.825q.625-.45 1.388-.7.762-.25 1.587-.25t1.588.25q.762.25 1.387.7L21.1 9.05q-1.95-1.475-4.262-2.263Q14.525 6 12 6t-4.838.787Q4.85 7.575 2.9 9.05Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi1BarFilled.displayName = 'AmauiIconMaterialNetworkWifi1BarFilled';

export default IconMaterialNetworkWifi1BarFilled;
