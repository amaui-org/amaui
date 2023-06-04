import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryCharging30Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging30Filled'

      short_name='BatteryCharging30'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Zm4-2 4-7.5h-2V7l-4 7.5h2Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging30Filled.displayName = 'AmauiIconMaterialBatteryCharging30Filled';

export default IconMaterialBatteryCharging30Filled;
