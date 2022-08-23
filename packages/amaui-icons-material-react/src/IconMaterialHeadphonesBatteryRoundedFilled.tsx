import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeadphonesBatteryRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesBatteryRoundedFilled'
      short_name='HeadphonesBattery'

      {...props}
    >
      <path d="M4 18Q3.175 18 2.588 17.413Q2 16.825 2 16V12Q2 9.5 3.75 7.75Q5.5 6 8 6Q10.5 6 12.25 7.75Q14 9.5 14 12V16Q14 16.825 13.413 17.413Q12.825 18 12 18Q11.175 18 10.588 17.413Q10 16.825 10 16V15Q10 14.175 10.588 13.587Q11.175 13 12 13H12.5V12Q12.5 10.125 11.188 8.812Q9.875 7.5 8 7.5Q6.125 7.5 4.812 8.812Q3.5 10.125 3.5 12V13H4Q4.825 13 5.412 13.587Q6 14.175 6 15V16Q6 16.825 5.412 17.413Q4.825 18 4 18ZM17 18Q16.575 18 16.288 17.712Q16 17.425 16 17V8Q16 7.575 16.288 7.287Q16.575 7 17 7H18V6.5Q18 6.3 18.15 6.15Q18.3 6 18.5 6H19.5Q19.7 6 19.85 6.15Q20 6.3 20 6.5V7H21Q21.425 7 21.712 7.287Q22 7.575 22 8V17Q22 17.425 21.712 17.712Q21.425 18 21 18Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesBatteryRoundedFilled.displayName = 'AmauiIconMaterialHeadphonesBatteryRoundedFilled';

export default IconMaterialHeadphonesBatteryRoundedFilled;
