import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkWifi1BarSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi1BarSharp'
      short_name='NetworkWifi1Bar'

      {...props}
    >
      <path d="M12 21 0 9Q2.4 6.55 5.5 5.275Q8.6 4 12 4Q15.425 4 18.525 5.275Q21.625 6.55 24 9ZM9.025 15.175Q9.65 14.725 10.413 14.475Q11.175 14.225 12 14.225Q12.825 14.225 13.588 14.475Q14.35 14.725 14.975 15.175L21.1 9.05Q19.15 7.575 16.838 6.787Q14.525 6 12 6Q9.475 6 7.162 6.787Q4.85 7.575 2.9 9.05Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi1BarSharp.displayName = 'AmauiIconMaterialNetworkWifi1BarSharp';

export default IconMaterialNetworkWifi1BarSharp;
