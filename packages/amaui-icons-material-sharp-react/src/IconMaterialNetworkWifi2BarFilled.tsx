import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifi2BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi2BarFilled'

      short_name='NetworkWifi2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21 0 9q2.4-2.45 5.5-3.725T12 4q3.425 0 6.525 1.275Q21.625 6.55 24 9Zm-4.525-7.375q.95-.7 2.1-1.088 1.15-.387 2.425-.387t2.425.387q1.15.388 2.1 1.088L21.1 9.05q-1.95-1.475-4.262-2.263Q14.525 6 12 6t-4.838.787Q4.85 7.575 2.9 9.05Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi2BarFilled.displayName = 'AmauiIconMaterialNetworkWifi2BarFilled';

export default IconMaterialNetworkWifi2BarFilled;
