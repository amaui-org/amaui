import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellularNullTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularNullTwoTone'
      short_name='SignalCellularNull'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z"/>
    </Icon>
  )
});

export default IconMaterialSignalCellularNullTwoTone;
