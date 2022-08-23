import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryAlertSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAlertSharpW100Filled'
      short_name='BatteryAlert'

      {...props}
    >
      <path d="M7.65 21.35V4.65H10.4V3.15H13.6V4.65H16.35V21.35ZM12.05 17.35Q12.275 17.35 12.438 17.188Q12.6 17.025 12.6 16.8Q12.6 16.575 12.438 16.413Q12.275 16.25 12.05 16.25Q11.825 16.25 11.663 16.413Q11.5 16.575 11.5 16.8Q11.5 17.025 11.663 17.188Q11.825 17.35 12.05 17.35ZM11.65 14.7H12.35V8.6H11.65Z"/>
    </Icon>
  );
});

IconMaterialBatteryAlertSharpW100Filled.displayName = 'AmauiIconMaterialBatteryAlertSharpW100Filled';

export default IconMaterialBatteryAlertSharpW100Filled;
