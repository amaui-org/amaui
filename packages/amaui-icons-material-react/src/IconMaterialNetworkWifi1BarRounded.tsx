import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkWifi1BarRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi1BarRounded'
      short_name='NetworkWifi1Bar'

      {...props}
    >
      <path d="M9.025 15.175Q9.65 14.725 10.413 14.475Q11.175 14.225 12 14.225Q12.825 14.225 13.588 14.475Q14.35 14.725 14.975 15.175L21.1 9.05Q19.15 7.575 16.838 6.787Q14.525 6 12 6Q9.475 6 7.162 6.787Q4.85 7.575 2.9 9.05ZM12 20.575Q11.8 20.575 11.625 20.512Q11.45 20.45 11.3 20.3L0.7 9.7Q0.4 9.4 0.413 8.987Q0.425 8.575 0.725 8.3Q3.075 6.175 5.963 5.088Q8.85 4 12 4Q15.175 4 18.062 5.088Q20.95 6.175 23.275 8.3Q23.575 8.575 23.588 8.987Q23.6 9.4 23.3 9.7L12.7 20.3Q12.55 20.45 12.375 20.512Q12.2 20.575 12 20.575Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi1BarRounded.displayName = 'AmauiIconMaterialNetworkWifi1BarRounded';

export default IconMaterialNetworkWifi1BarRounded;
