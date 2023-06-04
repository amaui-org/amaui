import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellular2BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular2BarW100Filled'

      short_name='SignalCellular2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.225 20.7 15.55-15.55V20.7Zm7.85-.7h7V6.85l-7 7Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular2BarW100Filled.displayName = 'AmauiIconMaterialSignalCellular2BarW100Filled';

export default IconMaterialSignalCellular2BarW100Filled;
