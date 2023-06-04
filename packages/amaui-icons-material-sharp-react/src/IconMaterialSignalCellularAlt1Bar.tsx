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
      <path d="M5 20v-6h3v6Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAlt1Bar.displayName = 'AmauiIconMaterialSignalCellularAlt1Bar';

export default IconMaterialSignalCellularAlt1Bar;
