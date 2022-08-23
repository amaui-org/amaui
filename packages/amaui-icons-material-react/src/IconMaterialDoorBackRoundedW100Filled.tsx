import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorBackRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorBackRoundedW100Filled'
      short_name='DoorBack'

      {...props}
    >
      <path d="M4.65 19.7Q4.5 19.7 4.4 19.6Q4.3 19.5 4.3 19.35Q4.3 19.2 4.4 19.1Q4.5 19 4.65 19H6.3V5.8Q6.3 5.15 6.725 4.725Q7.15 4.3 7.8 4.3H16.2Q16.85 4.3 17.275 4.725Q17.7 5.15 17.7 5.8V19H19.35Q19.5 19 19.6 19.1Q19.7 19.2 19.7 19.35Q19.7 19.5 19.6 19.6Q19.5 19.7 19.35 19.7ZM9.7 12.7Q9.975 12.7 10.188 12.487Q10.4 12.275 10.4 12Q10.4 11.725 10.188 11.512Q9.975 11.3 9.7 11.3Q9.425 11.3 9.213 11.512Q9 11.725 9 12Q9 12.275 9.213 12.487Q9.425 12.7 9.7 12.7Z"/>
    </Icon>
  );
});

IconMaterialDoorBackRoundedW100Filled.displayName = 'AmauiIconMaterialDoorBackRoundedW100Filled';

export default IconMaterialDoorBackRoundedW100Filled;
