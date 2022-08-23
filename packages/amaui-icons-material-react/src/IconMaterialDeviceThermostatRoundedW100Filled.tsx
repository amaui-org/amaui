import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeviceThermostatRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceThermostatRoundedW100Filled'
      short_name='DeviceThermostat'

      {...props}
    >
      <path d="M12 20.7Q10.45 20.7 9.375 19.625Q8.3 18.55 8.3 17Q8.3 15.95 8.838 15.075Q9.375 14.2 10.3 13.7V5Q10.3 4.275 10.788 3.787Q11.275 3.3 12 3.3Q12.725 3.3 13.213 3.787Q13.7 4.275 13.7 5V13.7Q14.625 14.2 15.163 15.075Q15.7 15.95 15.7 17Q15.7 18.55 14.625 19.625Q13.55 20.7 12 20.7ZM11 11.5H13V9.85H12V9.15H13V6.85H12V6.15H13V5Q13 4.575 12.713 4.287Q12.425 4 12 4Q11.575 4 11.288 4.287Q11 4.575 11 5Z"/>
    </Icon>
  );
});

IconMaterialDeviceThermostatRoundedW100Filled.displayName = 'AmauiIconMaterialDeviceThermostatRoundedW100Filled';

export default IconMaterialDeviceThermostatRoundedW100Filled;
