import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorSlidingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSlidingRoundedFilled'
      short_name='DoorSliding'

      {...props}
    >
      <path d="M8.975 13Q9.4 13 9.688 12.712Q9.975 12.425 9.975 12Q9.975 11.575 9.688 11.287Q9.4 11 8.975 11Q8.55 11 8.263 11.287Q7.975 11.575 7.975 12Q7.975 12.425 8.263 12.712Q8.55 13 8.975 13ZM14.975 13Q15.4 13 15.688 12.712Q15.975 12.425 15.975 12Q15.975 11.575 15.688 11.287Q15.4 11 14.975 11Q14.55 11 14.263 11.287Q13.975 11.575 13.975 12Q13.975 12.425 14.263 12.712Q14.55 13 14.975 13ZM3.975 21Q3.55 21 3.263 20.712Q2.975 20.425 2.975 20Q2.975 19.575 3.263 19.288Q3.55 19 3.975 19V5Q3.975 4.175 4.562 3.587Q5.15 3 5.975 3H11.475V19H12.475V3H17.975Q18.8 3 19.388 3.587Q19.975 4.175 19.975 5V19Q20.4 19 20.688 19.288Q20.975 19.575 20.975 20Q20.975 20.425 20.688 20.712Q20.4 21 19.975 21Z"/>
    </Icon>
  );
});

IconMaterialDoorSlidingRoundedFilled.displayName = 'AmauiIconMaterialDoorSlidingRoundedFilled';

export default IconMaterialDoorSlidingRoundedFilled;
