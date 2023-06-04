import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellular3BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular3BarW100'

      short_name='SignalCellular3Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.075 20h5V6.85l-5 5Zm-8.05.7q-.5 0-.687-.463-.188-.462.162-.812l13-13q.35-.35.812-.163.463.188.463.688v13q0 .325-.213.537-.212.213-.537.213Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular3BarW100.displayName = 'AmauiIconMaterialSignalCellular3BarW100';

export default IconMaterialSignalCellular3BarW100;
