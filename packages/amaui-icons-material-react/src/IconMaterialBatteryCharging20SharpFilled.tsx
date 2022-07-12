import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryCharging20SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging20SharpFilled'
      short_name='BatteryCharging20'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22ZM11 20 15 12.5H13V7L9 14.5H11Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryCharging20SharpFilled;
