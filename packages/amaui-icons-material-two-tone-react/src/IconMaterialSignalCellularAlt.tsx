import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt'

      short_name='SignalCellularAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAlt.displayName = 'AmauiIconMaterialSignalCellularAlt';

export default IconMaterialSignalCellularAlt;
