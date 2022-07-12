import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellular2BarTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular2BarTwoTone'
      short_name='SignalCellular2Bar'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 22h20V2L2 22z" fill-opacity=".3"/><path d="M14 10L2 22h12V10z"/>
    </Icon>
  )
});

export default IconMaterialSignalCellular2BarTwoTone;
