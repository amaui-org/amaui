import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellularAltSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAltSharpFilled'
      short_name='SignalCellularAlt'

      {...props}
    >
      <path d="M17 20V4H20V20ZM5 20V14H8V20ZM11 20V9H14V20Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAltSharpFilled.displayName = 'AmauiIconMaterialSignalCellularAltSharpFilled';

export default IconMaterialSignalCellularAltSharpFilled;
