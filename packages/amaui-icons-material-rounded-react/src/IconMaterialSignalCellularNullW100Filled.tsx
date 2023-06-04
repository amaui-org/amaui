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
      <path d="M5.925 20h13.15V6.85Zm.1.7q-.5 0-.687-.463-.188-.462.162-.812l13-13q.35-.35.812-.163.463.188.463.688v13q0 .325-.213.537-.212.213-.537.213Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularNullW100Filled.displayName = 'AmauiIconMaterialSignalCellularNullW100Filled';

export default IconMaterialSignalCellularNullW100Filled;
