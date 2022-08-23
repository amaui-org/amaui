import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditCalendarRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditCalendarRoundedFilled'
      short_name='EditCalendar'

      {...props}
    >
      <path d="M5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V3Q6 2.575 6.287 2.287Q6.575 2 7 2Q7.425 2 7.713 2.287Q8 2.575 8 3V4H16V3Q16 2.575 16.288 2.287Q16.575 2 17 2Q17.425 2 17.712 2.287Q18 2.575 18 3V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V12H19V10H5V20Q5 20 5 20Q5 20 5 20H12V22ZM22.125 17 20 14.875 20.725 14.15Q21 13.875 21.425 13.875Q21.85 13.875 22.125 14.15L22.85 14.875Q23.125 15.15 23.125 15.575Q23.125 16 22.85 16.275ZM14 22.5V21.3Q14 21.1 14.075 20.913Q14.15 20.725 14.3 20.575L19.3 15.575L21.425 17.7L16.425 22.7Q16.275 22.85 16.088 22.925Q15.9 23 15.7 23H14.5Q14.3 23 14.15 22.85Q14 22.7 14 22.5Z"/>
    </Icon>
  );
});

IconMaterialEditCalendarRoundedFilled.displayName = 'AmauiIconMaterialEditCalendarRoundedFilled';

export default IconMaterialEditCalendarRoundedFilled;
