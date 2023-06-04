import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAlt2BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt2BarW100'

      short_name='SignalCellularAlt2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.9 18.35v-4.7h1.2v4.7Zm5 0v-9.7h1.2v9.7Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAlt2BarW100.displayName = 'AmauiIconMaterialSignalCellularAlt2BarW100';

export default IconMaterialSignalCellularAlt2BarW100;
