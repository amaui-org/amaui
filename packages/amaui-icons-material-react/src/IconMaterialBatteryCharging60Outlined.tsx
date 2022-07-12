import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryCharging60Outlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging60Outlined'
      short_name='BatteryCharging60'

      {...props}
    >
      <path d="M8 22Q7.575 22 7.287 21.712Q7 21.425 7 21V5Q7 4.575 7.287 4.287Q7.575 4 8 4H10V2H14V4H16Q16.425 4 16.712 4.287Q17 4.575 17 5V21Q17 21.425 16.712 21.712Q16.425 22 16 22ZM11 20 15 12.5H13V7L9 14.5H11Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryCharging60Outlined;
