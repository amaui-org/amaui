import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAltFilled'

      short_name='SignalCellularAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20v-6h3v6Zm6 0V9h3v11Zm6 0V4h3v16Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAltFilled.displayName = 'AmauiIconMaterialSignalCellularAltFilled';

export default IconMaterialSignalCellularAltFilled;
