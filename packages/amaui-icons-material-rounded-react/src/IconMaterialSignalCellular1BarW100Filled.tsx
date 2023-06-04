import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellular1BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular1BarW100Filled'

      short_name='SignalCellular1Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.075 20h10V6.85l-10 10Zm-3.05.7q-.5 0-.687-.463-.188-.462.162-.812l13-13q.35-.35.812-.163.463.188.463.688v13q0 .325-.213.537-.212.213-.537.213Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular1BarW100Filled.displayName = 'AmauiIconMaterialSignalCellular1BarW100Filled';

export default IconMaterialSignalCellular1BarW100Filled;
