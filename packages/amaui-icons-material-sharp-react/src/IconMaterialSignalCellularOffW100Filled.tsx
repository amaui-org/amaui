import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularOffW100Filled'

      short_name='SignalCellularOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.25 22.7-2-2H3.65l7.3-7.3-7-7 .5-.5 16.3 16.3Zm-1.05-4.95-6.3-6.3 6.3-6.3Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularOffW100Filled.displayName = 'AmauiIconMaterialSignalCellularOffW100Filled';

export default IconMaterialSignalCellularOffW100Filled;
