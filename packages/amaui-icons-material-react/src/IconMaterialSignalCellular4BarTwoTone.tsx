import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellular4BarTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular4BarTwoTone'
      short_name='SignalCellular4Bar'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 22h20V2L2 22z"/>
    </Icon>
  )
});

export default IconMaterialSignalCellular4BarTwoTone;
