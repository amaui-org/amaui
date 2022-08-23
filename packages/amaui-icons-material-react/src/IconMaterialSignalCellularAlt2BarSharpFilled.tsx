import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellularAlt2BarSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt2BarSharpFilled'
      short_name='SignalCellularAlt2Bar'

      {...props}
    >
      <path d="M5 20V14H8V20ZM11 20V9H14V20Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAlt2BarSharpFilled.displayName = 'AmauiIconMaterialSignalCellularAlt2BarSharpFilled';

export default IconMaterialSignalCellularAlt2BarSharpFilled;
