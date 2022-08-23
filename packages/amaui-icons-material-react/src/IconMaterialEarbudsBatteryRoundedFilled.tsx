import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEarbudsBatteryRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsBatteryRoundedFilled'
      short_name='EarbudsBattery'

      {...props}
    >
      <path d="M17 18Q16.575 18 16.288 17.712Q16 17.425 16 17V8Q16 7.575 16.288 7.287Q16.575 7 17 7H18V6.5Q18 6.3 18.15 6.15Q18.3 6 18.5 6H19.5Q19.7 6 19.85 6.15Q20 6.3 20 6.5V7H21Q21.425 7 21.712 7.287Q22 7.575 22 8V17Q22 17.425 21.712 17.712Q21.425 18 21 18ZM5.375 18Q3.95 18 2.975 17.025Q2 16.05 2 14.625V8Q2 7.175 2.588 6.588Q3.175 6 4 6Q4.825 6 5.412 6.588Q6 7.175 6 8Q6 8.825 5.412 9.412Q4.825 10 4 10Q3.875 10 3.75 9.975Q3.625 9.95 3.5 9.9V14.625Q3.5 15.425 4.037 15.962Q4.575 16.5 5.375 16.5Q6.175 16.5 6.713 15.962Q7.25 15.425 7.25 14.625V9.375Q7.25 7.95 8.225 6.975Q9.2 6 10.625 6Q12.05 6 13.025 6.975Q14 7.95 14 9.375V16Q14 16.825 13.413 17.413Q12.825 18 12 18Q11.175 18 10.588 17.413Q10 16.825 10 16Q10 15.175 10.588 14.587Q11.175 14 12 14Q12.125 14 12.25 14.025Q12.375 14.05 12.5 14.1V9.375Q12.5 8.575 11.963 8.037Q11.425 7.5 10.625 7.5Q9.825 7.5 9.288 8.037Q8.75 8.575 8.75 9.375V14.625Q8.75 16.05 7.775 17.025Q6.8 18 5.375 18Z"/>
    </Icon>
  );
});

IconMaterialEarbudsBatteryRoundedFilled.displayName = 'AmauiIconMaterialEarbudsBatteryRoundedFilled';

export default IconMaterialEarbudsBatteryRoundedFilled;
