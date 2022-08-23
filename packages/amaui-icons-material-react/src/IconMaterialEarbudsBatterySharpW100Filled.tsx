import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEarbudsBatterySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsBatterySharpW100Filled'
      short_name='EarbudsBattery'

      {...props}
    >
      <path d="M16.85 17.35V7.45H18.75V6.75H19.45V7.45H21.35V17.35ZM5.625 17.35Q4.375 17.35 3.513 16.488Q2.65 15.625 2.65 14.375V6.75H5.85V9.95H3.35V14.375Q3.35 15.325 4.013 15.987Q4.675 16.65 5.625 16.65Q6.575 16.65 7.238 15.987Q7.9 15.325 7.9 14.375V9.725Q7.9 8.475 8.762 7.612Q9.625 6.75 10.875 6.75Q12.125 6.75 12.988 7.6Q13.85 8.45 13.85 9.725V17.35H10.65V14.15H13.15V9.725Q13.15 8.775 12.488 8.112Q11.825 7.45 10.875 7.45Q9.925 7.45 9.262 8.112Q8.6 8.775 8.6 9.725V14.375Q8.6 15.625 7.737 16.488Q6.875 17.35 5.625 17.35Z"/>
    </Icon>
  );
});

IconMaterialEarbudsBatterySharpW100Filled.displayName = 'AmauiIconMaterialEarbudsBatterySharpW100Filled';

export default IconMaterialEarbudsBatterySharpW100Filled;
