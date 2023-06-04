import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellular4BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular4BarW100'

      short_name='SignalCellular4Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.225 20.7 15.55-15.55V20.7Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular4BarW100.displayName = 'AmauiIconMaterialSignalCellular4BarW100';

export default IconMaterialSignalCellular4BarW100;
