import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorSlidingRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSlidingRoundedW100Filled'
      short_name='DoorSliding'

      {...props}
    >
      <path d="M9.925 12.7Q10.2 12.7 10.413 12.487Q10.625 12.275 10.625 12Q10.625 11.725 10.413 11.512Q10.2 11.3 9.925 11.3Q9.65 11.3 9.438 11.512Q9.225 11.725 9.225 12Q9.225 12.275 9.438 12.487Q9.65 12.7 9.925 12.7ZM14.025 12.7Q14.3 12.7 14.513 12.487Q14.725 12.275 14.725 12Q14.725 11.725 14.513 11.512Q14.3 11.3 14.025 11.3Q13.75 11.3 13.538 11.512Q13.325 11.725 13.325 12Q13.325 12.275 13.538 12.487Q13.75 12.7 14.025 12.7ZM5.925 19.7Q5.775 19.7 5.675 19.6Q5.575 19.5 5.575 19.35Q5.575 19.2 5.675 19.1Q5.775 19 5.925 19V5.8Q5.925 5.15 6.35 4.725Q6.775 4.3 7.425 4.3H11.625V19H12.325V4.3H16.525Q17.175 4.3 17.6 4.725Q18.025 5.15 18.025 5.8V19Q18.175 19 18.275 19.1Q18.375 19.2 18.375 19.35Q18.375 19.5 18.275 19.6Q18.175 19.7 18.025 19.7Z"/>
    </Icon>
  );
});

IconMaterialDoorSlidingRoundedW100Filled.displayName = 'AmauiIconMaterialDoorSlidingRoundedW100Filled';

export default IconMaterialDoorSlidingRoundedW100Filled;
