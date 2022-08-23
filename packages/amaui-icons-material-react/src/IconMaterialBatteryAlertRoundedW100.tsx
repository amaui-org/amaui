import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryAlertRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAlertRoundedW100'
      short_name='BatteryAlert'

      {...props}
    >
      <path d="M8.35 21.35Q8.05 21.35 7.85 21.15Q7.65 20.95 7.65 20.65V5.35Q7.65 5.05 7.85 4.85Q8.05 4.65 8.35 4.65H10.4V3.9Q10.4 3.575 10.613 3.362Q10.825 3.15 11.15 3.15H12.85Q13.175 3.15 13.388 3.362Q13.6 3.575 13.6 3.9V4.65H15.65Q15.95 4.65 16.15 4.85Q16.35 5.05 16.35 5.35V20.65Q16.35 20.95 16.15 21.15Q15.95 21.35 15.65 21.35ZM12.05 17.35Q12.275 17.35 12.438 17.188Q12.6 17.025 12.6 16.8Q12.6 16.575 12.438 16.413Q12.275 16.25 12.05 16.25Q11.825 16.25 11.663 16.413Q11.5 16.575 11.5 16.8Q11.5 17.025 11.663 17.188Q11.825 17.35 12.05 17.35ZM12 14.7Q12.15 14.7 12.25 14.6Q12.35 14.5 12.35 14.35V8.95Q12.35 8.8 12.25 8.7Q12.15 8.6 12 8.6Q11.85 8.6 11.75 8.7Q11.65 8.8 11.65 8.95V14.35Q11.65 14.5 11.75 14.6Q11.85 14.7 12 14.7Z"/>
    </Icon>
  );
});

IconMaterialBatteryAlertRoundedW100.displayName = 'AmauiIconMaterialBatteryAlertRoundedW100';

export default IconMaterialBatteryAlertRoundedW100;
