import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularNull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularNull'

      short_name='SignalCellularNull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z"/>
    </Icon>
  );
});

IconMaterialSignalCellularNull.displayName = 'AmauiIconMaterialSignalCellularNull';

export default IconMaterialSignalCellularNull;
