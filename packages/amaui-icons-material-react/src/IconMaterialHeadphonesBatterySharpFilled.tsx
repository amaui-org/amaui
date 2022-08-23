import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeadphonesBatterySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesBatterySharpFilled'
      short_name='HeadphonesBattery'

      {...props}
    >
      <path d="M2 18V12Q2 9.5 3.75 7.75Q5.5 6 8 6Q10.5 6 12.25 7.75Q14 9.5 14 12V18H10V13H12.5V12Q12.5 10.125 11.188 8.812Q9.875 7.5 8 7.5Q6.125 7.5 4.812 8.812Q3.5 10.125 3.5 12V13H6V18ZM16 18V7H18V6H20V7H22V18Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesBatterySharpFilled.displayName = 'AmauiIconMaterialHeadphonesBatterySharpFilled';

export default IconMaterialHeadphonesBatterySharpFilled;
