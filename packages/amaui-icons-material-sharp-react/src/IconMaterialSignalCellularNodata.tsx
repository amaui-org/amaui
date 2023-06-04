import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularNodata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularNodata'

      short_name='SignalCellularNodata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22 22 2v11h-9v9Zm13.4-1L14 19.6l2.1-2.1-2.1-2.1 1.4-1.4 2.1 2.1 2.1-2.1 1.4 1.4-2.1 2.1 2.1 2.1-1.4 1.4-2.1-2.1Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularNodata.displayName = 'AmauiIconMaterialSignalCellularNodata';

export default IconMaterialSignalCellularNodata;
