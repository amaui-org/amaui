import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPermContactCalendarRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermContactCalendarRoundedFilled'
      short_name='PermContactCalendar'

      {...props}
    >
      <path d="M5 18.85Q6.35 17.525 8.138 16.762Q9.925 16 12 16Q14.075 16 15.863 16.762Q17.65 17.525 19 18.85V6Q19 6 19 6Q19 6 19 6H5Q5 6 5 6Q5 6 5 6ZM12 14Q10.55 14 9.525 12.975Q8.5 11.95 8.5 10.5Q8.5 9.05 9.525 8.025Q10.55 7 12 7Q13.45 7 14.475 8.025Q15.5 9.05 15.5 10.5Q15.5 11.95 14.475 12.975Q13.45 14 12 14ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V3Q6 2.575 6.287 2.287Q6.575 2 7 2Q7.425 2 7.713 2.287Q8 2.575 8 3V4H16V3Q16 2.575 16.288 2.287Q16.575 2 17 2Q17.425 2 17.712 2.287Q18 2.575 18 3V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22Z"/>
    </Icon>
  );
});

IconMaterialPermContactCalendarRoundedFilled.displayName = 'AmauiIconMaterialPermContactCalendarRoundedFilled';

export default IconMaterialPermContactCalendarRoundedFilled;
