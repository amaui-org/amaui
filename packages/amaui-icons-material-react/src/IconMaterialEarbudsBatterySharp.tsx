import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEarbudsBatterySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsBatterySharp'
      short_name='EarbudsBattery'

      {...props}
    >
      <path d="M16 18V7H18V6H20V7H22V18ZM18 16H20H18ZM5.375 18Q3.95 18 2.975 17.025Q2 16.05 2 14.625V6H6V10H3.5V14.625Q3.5 15.425 4.037 15.962Q4.575 16.5 5.375 16.5Q6.175 16.5 6.713 15.962Q7.25 15.425 7.25 14.625V9.375Q7.25 7.95 8.225 6.975Q9.2 6 10.625 6Q12.05 6 13.025 6.975Q14 7.95 14 9.375V18H10V14H12.5V9.375Q12.5 8.575 11.963 8.037Q11.425 7.5 10.625 7.5Q9.825 7.5 9.288 8.037Q8.75 8.575 8.75 9.375V14.625Q8.75 16.05 7.775 17.025Q6.8 18 5.375 18ZM18 16H20V9H18Z"/>
    </Icon>
  );
});

IconMaterialEarbudsBatterySharp.displayName = 'AmauiIconMaterialEarbudsBatterySharp';

export default IconMaterialEarbudsBatterySharp;
