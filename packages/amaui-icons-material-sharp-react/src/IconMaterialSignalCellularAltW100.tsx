import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAltW100'

      short_name='SignalCellularAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.9 18.35v-4.7h1.2v4.7Zm5 0v-9.7h1.2v9.7Zm5 0V3.65h1.2v14.7Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAltW100.displayName = 'AmauiIconMaterialSignalCellularAltW100';

export default IconMaterialSignalCellularAltW100;
