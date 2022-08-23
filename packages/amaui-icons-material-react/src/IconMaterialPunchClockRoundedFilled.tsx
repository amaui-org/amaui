import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPunchClockRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClockRoundedFilled'
      short_name='PunchClock'

      {...props}
    >
      <path d="M5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V8Q3 7.175 3.587 6.588Q4.175 6 5 6H6V3Q6 2.175 6.588 1.587Q7.175 1 8 1H16Q16.825 1 17.413 1.587Q18 2.175 18 3V6H19Q19.825 6 20.413 6.588Q21 7.175 21 8V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM8 6H16V3Q16 3 16 3Q16 3 16 3H8Q8 3 8 3Q8 3 8 3ZM12 18.2Q13.725 18.2 14.963 16.962Q16.2 15.725 16.2 14Q16.2 12.275 14.963 11.037Q13.725 9.8 12 9.8Q10.275 9.8 9.038 11.037Q7.8 12.275 7.8 14Q7.8 15.725 9.038 16.962Q10.275 18.2 12 18.2ZM12.8 15.5 11.65 14.35Q11.6 14.3 11.5 14V12Q11.5 11.8 11.65 11.65Q11.8 11.5 12 11.5Q12.2 11.5 12.35 11.65Q12.5 11.8 12.5 12V13.8L13.5 14.8Q13.65 14.95 13.65 15.15Q13.65 15.35 13.5 15.5Q13.35 15.65 13.15 15.65Q12.95 15.65 12.8 15.5Z"/>
    </Icon>
  );
});

IconMaterialPunchClockRoundedFilled.displayName = 'AmauiIconMaterialPunchClockRoundedFilled';

export default IconMaterialPunchClockRoundedFilled;
