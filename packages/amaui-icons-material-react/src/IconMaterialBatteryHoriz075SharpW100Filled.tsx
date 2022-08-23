import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryHoriz075SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz075SharpW100Filled'
      short_name='BatteryHoriz075'

      {...props}
    >
      <path d="M20.45 15.85H5.075V13.6h-1.5v-3.2h1.5V8.15H20.45Zm-10.725-.7v-6.3H5.75v6.3Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz075SharpW100Filled.displayName = 'AmauiIconMaterialBatteryHoriz075SharpW100Filled';

export default IconMaterialBatteryHoriz075SharpW100Filled;
