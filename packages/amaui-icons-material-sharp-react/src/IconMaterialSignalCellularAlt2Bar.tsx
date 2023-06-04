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
      <path d="M5 20v-6h3v6Zm6 0V9h3v11Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAlt2Bar.displayName = 'AmauiIconMaterialSignalCellularAlt2Bar';

export default IconMaterialSignalCellularAlt2Bar;
