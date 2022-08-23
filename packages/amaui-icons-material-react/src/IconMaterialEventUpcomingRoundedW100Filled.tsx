import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventUpcomingRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventUpcomingRoundedW100Filled'
      short_name='EventUpcoming'

      {...props}
    >
      <path d="M15.075 20.7V20H18.2Q18.5 20 18.75 19.75Q19 19.5 19 19.2V10.8H5V14.65H4.3V6.8Q4.3 6.15 4.725 5.725Q5.15 5.3 5.8 5.3H7.8V3H8.6V5.3H15.5V3H16.2V5.3H18.2Q18.85 5.3 19.275 5.725Q19.7 6.15 19.7 6.8V19.2Q19.7 19.85 19.275 20.275Q18.85 20.7 18.2 20.7ZM8 23.075 7.525 22.6 10.725 19.35H1.65V18.65H10.725L7.525 15.4L8 14.925L12.075 19Z"/>
    </Icon>
  );
});

IconMaterialEventUpcomingRoundedW100Filled.displayName = 'AmauiIconMaterialEventUpcomingRoundedW100Filled';

export default IconMaterialEventUpcomingRoundedW100Filled;
