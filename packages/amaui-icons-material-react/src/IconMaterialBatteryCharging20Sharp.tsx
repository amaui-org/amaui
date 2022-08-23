import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryCharging20Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging20Sharp'
      short_name='BatteryCharging20'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22ZM11 20 15 12.5H13V7L9 14.5H11Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging20Sharp.displayName = 'AmauiIconMaterialBatteryCharging20Sharp';

export default IconMaterialBatteryCharging20Sharp;
