import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkWifiSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifiSharpFilled'
      short_name='NetworkWifi'

      {...props}
    >
      <path d="M12 21 0 9Q2.4 6.55 5.5 5.275Q8.6 4 12 4Q15.425 4 18.525 5.275Q21.625 6.55 24 9ZM4.35 10.5Q5.975 9.325 7.913 8.662Q9.85 8 12 8Q14.15 8 16.088 8.662Q18.025 9.325 19.65 10.5L21.1 9.05Q19.15 7.575 16.838 6.787Q14.525 6 12 6Q9.475 6 7.162 6.787Q4.85 7.575 2.9 9.05Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifiSharpFilled.displayName = 'AmauiIconMaterialNetworkWifiSharpFilled';

export default IconMaterialNetworkWifiSharpFilled;
