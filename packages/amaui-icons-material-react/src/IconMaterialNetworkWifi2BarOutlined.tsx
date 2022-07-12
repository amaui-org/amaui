import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkWifi2BarOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi2BarOutlined'
      short_name='NetworkWifi2Bar'

      {...props}
    >
      <path d="M12 21 0 9Q2.4 6.55 5.5 5.275Q8.6 4 12 4Q15.425 4 18.525 5.275Q21.625 6.55 24 9ZM7.475 13.625Q8.425 12.925 9.575 12.537Q10.725 12.15 12 12.15Q13.275 12.15 14.425 12.537Q15.575 12.925 16.525 13.625L21.1 9.05Q19.15 7.575 16.838 6.787Q14.525 6 12 6Q9.475 6 7.162 6.787Q4.85 7.575 2.9 9.05Z"/>
    </Icon>
  )
});

export default IconMaterialNetworkWifi2BarOutlined;
