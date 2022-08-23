import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryCharging80SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging80SharpW100Filled'
      short_name='BatteryCharging80'

      {...props}
    >
      <path d="M7.65 21.35V4.65H10.4V3.15H13.6V4.65H16.35V21.35ZM11.65 17.4 13.9 13.15H12.35V9.6L10.1 13.85H11.65Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging80SharpW100Filled.displayName = 'AmauiIconMaterialBatteryCharging80SharpW100Filled';

export default IconMaterialBatteryCharging80SharpW100Filled;
