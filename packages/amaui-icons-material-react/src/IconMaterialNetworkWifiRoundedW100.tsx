import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkWifiRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifiRoundedW100'
      short_name='NetworkWifi'

      {...props}
    >
      <path d="M12 18.85Q11.85 18.85 11.725 18.8Q11.6 18.75 11.475 18.625L2.35 9.5Q2.15 9.3 2.163 9.012Q2.175 8.725 2.4 8.55Q4.4 6.975 6.825 6.137Q9.25 5.3 12 5.3Q14.75 5.3 17.175 6.137Q19.6 6.975 21.6 8.55Q21.825 8.725 21.838 9.012Q21.85 9.3 21.65 9.5L12.525 18.625Q12.4 18.75 12.275 18.8Q12.15 18.85 12 18.85ZM4.35 10.5Q5.975 9.325 7.913 8.662Q9.85 8 12 8Q14.15 8 16.088 8.662Q18.025 9.325 19.65 10.5L21.1 9.05Q19.15 7.575 16.838 6.787Q14.525 6 12 6Q9.475 6 7.162 6.787Q4.85 7.575 2.9 9.05Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifiRoundedW100.displayName = 'AmauiIconMaterialNetworkWifiRoundedW100';

export default IconMaterialNetworkWifiRoundedW100;
