import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularNullW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularNullW100Filled'

      short_name='SignalCellularNull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.225 20.7 15.55-15.55V20.7Zm1.7-.7h13.15V6.85Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularNullW100Filled.displayName = 'AmauiIconMaterialSignalCellularNullW100Filled';

export default IconMaterialSignalCellularNullW100Filled;
