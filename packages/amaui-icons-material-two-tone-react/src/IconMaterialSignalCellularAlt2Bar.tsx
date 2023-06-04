import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAlt2Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt2Bar'

      short_name='SignalCellularAlt2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M5,14h3v6H5V14z M11,9h3v11h-3V9z"/></g></g>
    </Icon>
  );
});

IconMaterialSignalCellularAlt2Bar.displayName = 'AmauiIconMaterialSignalCellularAlt2Bar';

export default IconMaterialSignalCellularAlt2Bar;
