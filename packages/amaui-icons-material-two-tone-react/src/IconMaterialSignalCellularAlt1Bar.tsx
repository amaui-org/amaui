import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAlt1Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt1Bar'

      short_name='SignalCellularAlt1Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M5,14h3v6H5V14z"/></g>
    </Icon>
  );
});

IconMaterialSignalCellularAlt1Bar.displayName = 'AmauiIconMaterialSignalCellularAlt1Bar';

export default IconMaterialSignalCellularAlt1Bar;
