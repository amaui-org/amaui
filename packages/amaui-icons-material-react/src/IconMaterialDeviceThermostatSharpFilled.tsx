import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeviceThermostatSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceThermostatSharpFilled'
      short_name='DeviceThermostat'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.463 20.538Q7 19.075 7 17Q7 15.8 7.525 14.762Q8.05 13.725 9 13V5Q9 3.75 9.875 2.875Q10.75 2 12 2Q13.25 2 14.125 2.875Q15 3.75 15 5V13Q15.95 13.725 16.475 14.762Q17 15.8 17 17Q17 19.075 15.538 20.538Q14.075 22 12 22ZM11 11H13V10H12V9H13V7H12V6H13V5Q13 4.575 12.713 4.287Q12.425 4 12 4Q11.575 4 11.288 4.287Q11 4.575 11 5Z"/>
    </Icon>
  );
});

IconMaterialDeviceThermostatSharpFilled.displayName = 'AmauiIconMaterialDeviceThermostatSharpFilled';

export default IconMaterialDeviceThermostatSharpFilled;
