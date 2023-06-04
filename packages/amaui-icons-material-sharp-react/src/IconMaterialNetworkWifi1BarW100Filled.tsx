import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifi1BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi1BarW100Filled'

      short_name='NetworkWifi1Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.15 1.85 9q2.075-1.775 4.638-2.738Q9.05 5.3 12 5.3q2.95 0 5.513.962Q20.075 7.225 22.15 9Zm-2.975-3.975q.625-.45 1.388-.7.762-.25 1.587-.25t1.588.25q.762.25 1.387.7L21.1 9.05q-1.95-1.475-4.262-2.263Q14.525 6 12 6t-4.838.787Q4.85 7.575 2.9 9.05Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi1BarW100Filled.displayName = 'AmauiIconMaterialNetworkWifi1BarW100Filled';

export default IconMaterialNetworkWifi1BarW100Filled;
