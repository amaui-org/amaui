import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryCharging50Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging50Sharp'
      short_name='BatteryCharging50'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22ZM11 20 15 12.5H13V7L9 14.5H11Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging50Sharp.displayName = 'AmauiIconMaterialBatteryCharging50Sharp';

export default IconMaterialBatteryCharging50Sharp;
