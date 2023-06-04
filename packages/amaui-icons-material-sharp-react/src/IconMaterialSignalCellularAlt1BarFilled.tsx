import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAlt1BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt1BarFilled'

      short_name='SignalCellularAlt1Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20v-6h3v6Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAlt1BarFilled.displayName = 'AmauiIconMaterialSignalCellularAlt1BarFilled';

export default IconMaterialSignalCellularAlt1BarFilled;
