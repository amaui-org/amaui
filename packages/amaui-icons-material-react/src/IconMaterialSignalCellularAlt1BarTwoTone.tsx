import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellularAlt1BarTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt1BarTwoTone'
      short_name='SignalCellularAlt1Bar'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M5,14h3v6H5V14z"/></g>
    </Icon>
  );
});

IconMaterialSignalCellularAlt1BarTwoTone.displayName = 'AmauiIconMaterialSignalCellularAlt1BarTwoTone';

export default IconMaterialSignalCellularAlt1BarTwoTone;
