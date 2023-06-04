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
      <path d="M12 19.15 1.85 9q2.075-1.775 4.638-2.738Q9.05 5.3 12 5.3q2.95 0 5.513.962Q20.075 7.225 22.15 9Zm-4.525-5.525q.95-.7 2.1-1.088 1.15-.387 2.425-.387t2.425.387q1.15.388 2.1 1.088L21.1 9.05q-1.95-1.475-4.262-2.263Q14.525 6 12 6t-4.838.787Q4.85 7.575 2.9 9.05Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi2BarW100.displayName = 'AmauiIconMaterialNetworkWifi2BarW100';

export default IconMaterialNetworkWifi2BarW100;
