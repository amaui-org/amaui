import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTodayRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TodayRoundedW100'
      short_name='Today'

      {...props}
    >
      <path d="M9 15.35Q8.175 15.35 7.588 14.762Q7 14.175 7 13.35Q7 12.525 7.588 11.938Q8.175 11.35 9 11.35Q9.825 11.35 10.413 11.938Q11 12.525 11 13.35Q11 14.175 10.413 14.762Q9.825 15.35 9 15.35ZM5.8 20.7Q5.15 20.7 4.725 20.275Q4.3 19.85 4.3 19.2V6.8Q4.3 6.15 4.725 5.725Q5.15 5.3 5.8 5.3H7.8V3.4Q7.8 3.225 7.913 3.112Q8.025 3 8.2 3Q8.375 3 8.488 3.112Q8.6 3.225 8.6 3.4V5.3H15.5V3.35Q15.5 3.2 15.6 3.1Q15.7 3 15.85 3Q16 3 16.1 3.1Q16.2 3.2 16.2 3.35V5.3H18.2Q18.85 5.3 19.275 5.725Q19.7 6.15 19.7 6.8V19.2Q19.7 19.85 19.275 20.275Q18.85 20.7 18.2 20.7ZM5.8 20H18.2Q18.55 20 18.775 19.775Q19 19.55 19 19.2V10.8H5V19.2Q5 19.55 5.225 19.775Q5.45 20 5.8 20ZM5 10.1H19V6.8Q19 6.45 18.775 6.225Q18.55 6 18.2 6H5.8Q5.45 6 5.225 6.225Q5 6.45 5 6.8ZM5 10.1V6.8Q5 6.45 5 6.225Q5 6 5 6Q5 6 5 6.225Q5 6.45 5 6.8V10.1Z"/>
    </Icon>
  );
});

IconMaterialTodayRoundedW100.displayName = 'AmauiIconMaterialTodayRoundedW100';

export default IconMaterialTodayRoundedW100;
