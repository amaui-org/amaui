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
      <path d="M2 22 21.975 2.025V22Zm4.825-2h13.15V6.85Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularNull.displayName = 'AmauiIconMaterialSignalCellularNull';

export default IconMaterialSignalCellularNull;
