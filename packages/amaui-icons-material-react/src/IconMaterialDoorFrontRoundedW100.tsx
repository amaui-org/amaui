import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorFrontRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorFrontRoundedW100'
      short_name='DoorFront'

      {...props}
    >
      <path d="M4.65 19.7Q4.5 19.7 4.4 19.6Q4.3 19.5 4.3 19.35Q4.3 19.2 4.4 19.1Q4.5 19 4.65 19H6.3V5.8Q6.3 5.15 6.725 4.725Q7.15 4.3 7.8 4.3H16.2Q16.85 4.3 17.275 4.725Q17.7 5.15 17.7 5.8V19H19.35Q19.5 19 19.6 19.1Q19.7 19.2 19.7 19.35Q19.7 19.5 19.6 19.6Q19.5 19.7 19.35 19.7ZM17 19V5.8Q17 5.45 16.775 5.225Q16.55 5 16.2 5H7Q7 5 7 5.225Q7 5.45 7 5.8V19ZM14.3 12.7Q14.575 12.7 14.788 12.487Q15 12.275 15 12Q15 11.725 14.788 11.512Q14.575 11.3 14.3 11.3Q14.025 11.3 13.812 11.512Q13.6 11.725 13.6 12Q13.6 12.275 13.812 12.487Q14.025 12.7 14.3 12.7ZM7 5Q7 5 7 5.225Q7 5.45 7 5.8V19V5.8Q7 5.45 7 5.225Q7 5 7 5Z"/>
    </Icon>
  );
});

IconMaterialDoorFrontRoundedW100.displayName = 'AmauiIconMaterialDoorFrontRoundedW100';

export default IconMaterialDoorFrontRoundedW100;
