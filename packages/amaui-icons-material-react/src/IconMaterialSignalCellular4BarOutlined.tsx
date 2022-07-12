import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellular4BarOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular4BarOutlined'
      short_name='SignalCellular4Bar'

      {...props}
    >
      <path d="M2 22 22 2V22Z"/>
    </Icon>
  )
});

export default IconMaterialSignalCellular4BarOutlined;
