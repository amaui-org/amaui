import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkWifiSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifiSharpW100Filled'
      short_name='NetworkWifi'

      {...props}
    >
      <path d="M12 19.15 1.85 9Q3.925 7.225 6.488 6.262Q9.05 5.3 12 5.3Q14.95 5.3 17.513 6.262Q20.075 7.225 22.15 9ZM4.35 10.5Q5.975 9.325 7.913 8.662Q9.85 8 12 8Q14.15 8 16.088 8.662Q18.025 9.325 19.65 10.5L21.1 9.05Q19.15 7.575 16.838 6.787Q14.525 6 12 6Q9.475 6 7.162 6.787Q4.85 7.575 2.9 9.05Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifiSharpW100Filled.displayName = 'AmauiIconMaterialNetworkWifiSharpW100Filled';

export default IconMaterialNetworkWifiSharpW100Filled;
