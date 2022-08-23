import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditCalendarRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditCalendarRoundedW100'
      short_name='EditCalendar'

      {...props}
    >
      <path d="M5.8 20.7Q5.15 20.7 4.725 20.275Q4.3 19.85 4.3 19.2V6.8Q4.3 6.15 4.725 5.725Q5.15 5.3 5.8 5.3H7.8V3.4Q7.8 3.225 7.913 3.112Q8.025 3 8.2 3Q8.375 3 8.488 3.112Q8.6 3.225 8.6 3.4V5.3H15.5V3.35Q15.5 3.2 15.6 3.1Q15.7 3 15.85 3Q16 3 16.1 3.1Q16.2 3.2 16.2 3.35V5.3H18.2Q18.85 5.3 19.275 5.725Q19.7 6.15 19.7 6.8V11.8H19V10.8H5V19.2Q5 19.55 5.225 19.775Q5.45 20 5.8 20H9.7V20.7ZM5 10.1H19V6.8Q19 6.45 18.775 6.225Q18.55 6 18.2 6H5.8Q5.45 6 5.225 6.225Q5 6.45 5 6.8ZM19.725 15.425 18.5 14.2 19.225 13.475Q19.35 13.35 19.475 13.35Q19.6 13.35 19.725 13.475L20.45 14.2Q20.575 14.325 20.575 14.45Q20.575 14.575 20.45 14.7ZM12.7 20.825V20.3Q12.7 20.15 12.75 20.025Q12.8 19.9 12.925 19.775L17.8 14.9L19.025 16.125L14.15 21Q14.025 21.125 13.9 21.175Q13.775 21.225 13.625 21.225H13.1Q12.925 21.225 12.812 21.113Q12.7 21 12.7 20.825ZM5 10.1V6.8Q5 6.45 5 6.225Q5 6 5 6Q5 6 5 6.225Q5 6.45 5 6.8V10.1Z"/>
    </Icon>
  );
});

IconMaterialEditCalendarRoundedW100.displayName = 'AmauiIconMaterialEditCalendarRoundedW100';

export default IconMaterialEditCalendarRoundedW100;
