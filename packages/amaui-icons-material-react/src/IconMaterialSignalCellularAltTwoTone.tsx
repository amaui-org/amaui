import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellularAltTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAltTwoTone'
      short_name='SignalCellularAlt'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z"/>
    </Icon>
  )
});

export default IconMaterialSignalCellularAltTwoTone;
