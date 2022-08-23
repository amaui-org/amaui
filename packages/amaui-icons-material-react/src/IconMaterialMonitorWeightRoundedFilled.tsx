import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorWeightRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorWeightRoundedFilled'
      short_name='MonitorWeight'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM12 12Q13.25 12 14.125 11.125Q15 10.25 15 9Q15 7.75 14.125 6.875Q13.25 6 12 6Q10.75 6 9.875 6.875Q9 7.75 9 9Q9 10.25 9.875 11.125Q10.75 12 12 12ZM10.5 9.5Q10.3 9.5 10.15 9.35Q10 9.2 10 9Q10 8.8 10.15 8.65Q10.3 8.5 10.5 8.5Q10.7 8.5 10.85 8.65Q11 8.8 11 9Q11 9.2 10.85 9.35Q10.7 9.5 10.5 9.5ZM12 9.5Q11.8 9.5 11.65 9.35Q11.5 9.2 11.5 9Q11.5 8.8 11.65 8.65Q11.8 8.5 12 8.5Q12.2 8.5 12.35 8.65Q12.5 8.8 12.5 9Q12.5 9.2 12.35 9.35Q12.2 9.5 12 9.5ZM13.5 9.5Q13.3 9.5 13.15 9.35Q13 9.2 13 9Q13 8.8 13.15 8.65Q13.3 8.5 13.5 8.5Q13.7 8.5 13.85 8.65Q14 8.8 14 9Q14 9.2 13.85 9.35Q13.7 9.5 13.5 9.5Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightRoundedFilled.displayName = 'AmauiIconMaterialMonitorWeightRoundedFilled';

export default IconMaterialMonitorWeightRoundedFilled;
