import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDevicesRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesRoundedW100Filled'
      short_name='Devices'

      {...props}
    >
      <path d="M5.275 17.35V6.75Q5.275 6.1 5.7 5.675Q6.125 5.25 6.775 5.25H19.975Q20.125 5.25 20.225 5.35Q20.325 5.45 20.325 5.6Q20.325 5.75 20.225 5.85Q20.125 5.95 19.975 5.95H6.775Q6.425 5.95 6.2 6.175Q5.975 6.4 5.975 6.75V17.35H10.8Q11.025 17.35 11.175 17.5Q11.325 17.65 11.325 17.875Q11.325 18.1 11.175 18.25Q11.025 18.4 10.8 18.4H3.8Q3.575 18.4 3.425 18.25Q3.275 18.1 3.275 17.875Q3.275 17.65 3.425 17.5Q3.575 17.35 3.8 17.35ZM16.025 18.4Q15.725 18.4 15.525 18.2Q15.325 18 15.325 17.7V9.65Q15.325 9.35 15.525 9.15Q15.725 8.95 16.025 8.95H20.025Q20.325 8.95 20.525 9.15Q20.725 9.35 20.725 9.65V17.7Q20.725 18 20.525 18.2Q20.325 18.4 20.025 18.4ZM16.025 17.35H20.025V9.65H16.025Z"/>
    </Icon>
  );
});

IconMaterialDevicesRoundedW100Filled.displayName = 'AmauiIconMaterialDevicesRoundedW100Filled';

export default IconMaterialDevicesRoundedW100Filled;
