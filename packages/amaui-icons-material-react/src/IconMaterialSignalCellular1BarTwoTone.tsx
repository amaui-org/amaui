import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellular1BarTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular1BarTwoTone'
      short_name='SignalCellular1Bar'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 22h20V2L2 22z" fill-opacity=".3"/><path d="M12 12L2 22h10V12z"/>
    </Icon>
  )
});

export default IconMaterialSignalCellular1BarTwoTone;
