import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeviceHubRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceHubRoundedW100Filled'
      short_name='DeviceHub'

      {...props}
    >
      <path d="M5.05 19.7Q4.725 19.7 4.513 19.487Q4.3 19.275 4.3 18.95V16.75Q4.3 16.425 4.513 16.212Q4.725 16 5.05 16H7.5L11.65 11.85V9.05Q10.8 8.85 10.225 8.212Q9.65 7.575 9.65 6.7Q9.65 5.725 10.338 5.037Q11.025 4.35 12 4.35Q12.975 4.35 13.663 5.037Q14.35 5.725 14.35 6.7Q14.35 7.575 13.775 8.212Q13.2 8.85 12.35 9.05V11.85L16.5 16H18.95Q19.275 16 19.488 16.212Q19.7 16.425 19.7 16.75V18.95Q19.7 19.275 19.488 19.487Q19.275 19.7 18.95 19.7H16.75Q16.425 19.7 16.212 19.487Q16 19.275 16 18.95V16.5L12 12.5L8 16.5V18.95Q8 19.275 7.787 19.487Q7.575 19.7 7.25 19.7Z"/>
    </Icon>
  );
});

IconMaterialDeviceHubRoundedW100Filled.displayName = 'AmauiIconMaterialDeviceHubRoundedW100Filled';

export default IconMaterialDeviceHubRoundedW100Filled;
