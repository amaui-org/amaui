import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryHoriz075W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz075W100Filled'

      short_name='BatteryHoriz075'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.45 15.85H5.075V13.6h-1.5v-3.2h1.5V8.15H20.45Zm-10.725-.7v-6.3H5.75v6.3Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz075W100Filled.displayName = 'AmauiIconMaterialBatteryHoriz075W100Filled';

export default IconMaterialBatteryHoriz075W100Filled;
