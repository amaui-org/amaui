import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkWifi2BarRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi2BarRounded'
      short_name='NetworkWifi2Bar'

      {...props}
    >
      <path d="M7.475 13.625Q8.425 12.925 9.575 12.537Q10.725 12.15 12 12.15Q13.275 12.15 14.425 12.537Q15.575 12.925 16.525 13.625L21.1 9.05Q19.15 7.575 16.838 6.787Q14.525 6 12 6Q9.475 6 7.162 6.787Q4.85 7.575 2.9 9.05ZM12 20.575Q11.8 20.575 11.625 20.512Q11.45 20.45 11.3 20.3L0.7 9.7Q0.4 9.4 0.413 8.987Q0.425 8.575 0.725 8.3Q3.075 6.175 5.963 5.088Q8.85 4 12 4Q15.175 4 18.062 5.088Q20.95 6.175 23.275 8.3Q23.575 8.575 23.588 8.987Q23.6 9.4 23.3 9.7L12.7 20.3Q12.55 20.45 12.375 20.512Q12.2 20.575 12 20.575Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi2BarRounded.displayName = 'AmauiIconMaterialNetworkWifi2BarRounded';

export default IconMaterialNetworkWifi2BarRounded;
