import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryCharging20Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging20Filled'

      short_name='BatteryCharging20'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Zm4-2 4-7.5h-2V7l-4 7.5h2Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging20Filled.displayName = 'AmauiIconMaterialBatteryCharging20Filled';

export default IconMaterialBatteryCharging20Filled;
