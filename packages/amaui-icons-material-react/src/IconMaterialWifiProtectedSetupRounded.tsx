import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiProtectedSetupRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProtectedSetupRounded'
      short_name='WifiProtectedSetup'

      {...props}
    >
      <path d="M16.4 16.625Q16.45 16.25 16.5 15.875Q16.55 15.5 16.55 15.125Q16.55 13.125 15.675 11.462Q14.8 9.8 13.3 8.7L11.85 10.15Q11.6 10.4 11.3 10.275Q11 10.15 11 9.8V3.5Q11 3.3 11.15 3.15Q11.3 3 11.5 3H17.8Q18.15 3 18.275 3.3Q18.4 3.6 18.15 3.85L16.7 5.3Q18 6.475 18.775 8.1Q19.55 9.725 19.55 11.625Q19.55 13.2 19.025 14.575Q18.5 15.95 17.575 17.075Q17.15 17.575 16.725 17.4Q16.3 17.225 16.4 16.625ZM6.2 21Q5.85 21 5.725 20.7Q5.6 20.4 5.85 20.15L7.3 18.7Q5.975 17.525 5.213 15.9Q4.45 14.275 4.45 12.375Q4.45 10.8 4.975 9.425Q5.5 8.05 6.45 6.925Q6.875 6.425 7.3 6.6Q7.725 6.775 7.6 7.375Q7.525 7.725 7.488 8.1Q7.45 8.475 7.45 8.875Q7.45 10.875 8.338 12.537Q9.225 14.2 10.7 15.3L12.15 13.85Q12.4 13.6 12.7 13.725Q13 13.85 13 14.2V20.5Q13 20.7 12.85 20.85Q12.7 21 12.5 21Z"/>
    </Icon>
  );
});

IconMaterialWifiProtectedSetupRounded.displayName = 'AmauiIconMaterialWifiProtectedSetupRounded';

export default IconMaterialWifiProtectedSetupRounded;
