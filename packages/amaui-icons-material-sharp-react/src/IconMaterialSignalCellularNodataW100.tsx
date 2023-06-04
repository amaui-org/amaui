import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularNodataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularNodataW100'

      short_name='SignalCellularNodata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.225 20.7 15.55-15.55v8.65h-6.9v6.9Zm10.25-.6-.5-.5 2.1-2.1-2.1-2.1.5-.5 2.1 2.1 2.1-2.1.5.5-2.1 2.1 2.1 2.1-.5.5-2.1-2.1Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularNodataW100.displayName = 'AmauiIconMaterialSignalCellularNodataW100';

export default IconMaterialSignalCellularNodataW100;
