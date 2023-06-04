import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAlt1BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt1BarW100Filled'

      short_name='SignalCellularAlt1Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 18.35q-.25 0-.425-.175T6.9 17.75v-3.5q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425v3.5q0 .25-.175.425t-.425.175Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAlt1BarW100Filled.displayName = 'AmauiIconMaterialSignalCellularAlt1BarW100Filled';

export default IconMaterialSignalCellularAlt1BarW100Filled;
