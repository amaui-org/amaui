import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiProtectedSetupSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiProtectedSetupSharpFilled'
      short_name='WifiProtectedSetup'

      {...props}
    >
      <path d="M15.675 18.75Q16.1 17.925 16.325 17.013Q16.55 16.1 16.55 15.125Q16.55 13.125 15.675 11.462Q14.8 9.8 13.3 8.7L11 11V3H19L16.7 5.3Q18 6.475 18.775 8.1Q19.55 9.725 19.55 11.625Q19.55 13.9 18.488 15.75Q17.425 17.6 15.675 18.75ZM5 21 7.3 18.7Q5.975 17.525 5.213 15.9Q4.45 14.275 4.45 12.375Q4.45 10.1 5.513 8.25Q6.575 6.4 8.35 5.25Q7.925 6.075 7.688 6.987Q7.45 7.9 7.45 8.875Q7.45 10.875 8.338 12.537Q9.225 14.2 10.7 15.3L13 13V21Z"/>
    </Icon>
  );
});

IconMaterialWifiProtectedSetupSharpFilled.displayName = 'AmauiIconMaterialWifiProtectedSetupSharpFilled';

export default IconMaterialWifiProtectedSetupSharpFilled;
