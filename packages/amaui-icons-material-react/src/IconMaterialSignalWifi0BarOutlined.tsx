import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalWifi0BarOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi0BarOutlined'
      short_name='SignalWifi0Bar'

      {...props}
    >
      <path d="M12 21 0 9Q2.375 6.575 5.487 5.287Q8.6 4 12 4Q15.4 4 18.512 5.287Q21.625 6.575 24 9ZM12 18.15 21.1 9.05Q19.125 7.55 16.8 6.775Q14.475 6 12 6Q9.525 6 7.2 6.775Q4.875 7.55 2.9 9.05Z"/>
    </Icon>
  )
});

export default IconMaterialSignalWifi0BarOutlined;
