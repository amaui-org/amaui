import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryChargingFullRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryChargingFullRounded'
      short_name='BatteryChargingFull'

      {...props}
    >
      <path d="M8 22Q7.575 22 7.287 21.712Q7 21.425 7 21V5Q7 4.575 7.287 4.287Q7.575 4 8 4H10V3Q10 2.575 10.288 2.287Q10.575 2 11 2H13Q13.425 2 13.713 2.287Q14 2.575 14 3V4H16Q16.425 4 16.712 4.287Q17 4.575 17 5V21Q17 21.425 16.712 21.712Q16.425 22 16 22ZM11.95 18.225 14.6 13.225Q14.725 12.975 14.588 12.738Q14.45 12.5 14.175 12.5H13V9Q13 8.6 12.625 8.512Q12.25 8.425 12.05 8.775L9.4 13.775Q9.275 14.025 9.413 14.262Q9.55 14.5 9.825 14.5H11V18Q11 18.4 11.375 18.487Q11.75 18.575 11.95 18.225Z"/>
    </Icon>
  );
});

IconMaterialBatteryChargingFullRounded.displayName = 'AmauiIconMaterialBatteryChargingFullRounded';

export default IconMaterialBatteryChargingFullRounded;
