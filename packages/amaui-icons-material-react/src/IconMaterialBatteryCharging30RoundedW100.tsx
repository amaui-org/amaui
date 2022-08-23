import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryCharging30RoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryCharging30RoundedW100'
      short_name='BatteryCharging30'

      {...props}
    >
      <path d="M8.35 21.35Q8.05 21.35 7.85 21.15Q7.65 20.95 7.65 20.65V5.35Q7.65 5.05 7.85 4.85Q8.05 4.65 8.35 4.65H10.4V3.9Q10.4 3.575 10.613 3.362Q10.825 3.15 11.15 3.15H12.85Q13.175 3.15 13.388 3.362Q13.6 3.575 13.6 3.9V4.65H15.65Q15.95 4.65 16.15 4.85Q16.35 5.05 16.35 5.35V20.65Q16.35 20.95 16.15 21.15Q15.95 21.35 15.65 21.35ZM12.4 15.975 13.6 13.725Q13.725 13.525 13.588 13.337Q13.45 13.15 13.225 13.15H12.35V11.2Q12.35 10.875 12.05 10.812Q11.75 10.75 11.6 11.025L10.4 13.275Q10.275 13.475 10.413 13.662Q10.55 13.85 10.775 13.85H11.65V15.8Q11.65 16.125 11.95 16.188Q12.25 16.25 12.4 15.975Z"/>
    </Icon>
  );
});

IconMaterialBatteryCharging30RoundedW100.displayName = 'AmauiIconMaterialBatteryCharging30RoundedW100';

export default IconMaterialBatteryCharging30RoundedW100;
