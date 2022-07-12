import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellularAlt2BarOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt2BarOutlined'
      short_name='SignalCellularAlt2Bar'

      {...props}
    >
      <path d="M5 20V14H8V20ZM11 20V9H14V20Z"/>
    </Icon>
  )
});

export default IconMaterialSignalCellularAlt2BarOutlined;
