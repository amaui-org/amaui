import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellular2BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular2BarW100'

      short_name='SignalCellular2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.075 20h7V6.85l-7 7Zm-6.05.7q-.5 0-.687-.463-.188-.462.162-.812l13-13q.35-.35.812-.163.463.188.463.688v13q0 .325-.213.537-.212.213-.537.213Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular2BarW100.displayName = 'AmauiIconMaterialSignalCellular2BarW100';

export default IconMaterialSignalCellular2BarW100;
