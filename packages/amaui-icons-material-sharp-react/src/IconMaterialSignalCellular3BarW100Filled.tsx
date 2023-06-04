import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellular3BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular3BarW100Filled'

      short_name='SignalCellular3Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.225 20.7 15.55-15.55V20.7Zm9.85-.7h5V6.85l-5 5Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular3BarW100Filled.displayName = 'AmauiIconMaterialSignalCellular3BarW100Filled';

export default IconMaterialSignalCellular3BarW100Filled;
