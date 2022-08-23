import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryAlertSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAlertSharpFilled'
      short_name='BatteryAlert'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22ZM12.05 18Q12.475 18 12.788 17.688Q13.1 17.375 13.1 16.95Q13.1 16.525 12.788 16.212Q12.475 15.9 12.05 15.9Q11.625 15.9 11.312 16.212Q11 16.525 11 16.95Q11 17.375 11.312 17.688Q11.625 18 12.05 18ZM11 14H13V8H11Z"/>
    </Icon>
  );
});

IconMaterialBatteryAlertSharpFilled.displayName = 'AmauiIconMaterialBatteryAlertSharpFilled';

export default IconMaterialBatteryAlertSharpFilled;
