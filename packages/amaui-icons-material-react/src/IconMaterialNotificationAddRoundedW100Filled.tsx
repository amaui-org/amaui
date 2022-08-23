import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationAddRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAddRoundedW100Filled'
      short_name='NotificationAdd'

      {...props}
    >
      <path d="M12 21.5Q11.35 21.5 10.925 21.075Q10.5 20.65 10.5 20H13.5Q13.5 20.65 13.075 21.075Q12.65 21.5 12 21.5ZM20 12.35Q19.85 12.35 19.75 12.25Q19.65 12.15 19.65 12V9.35H17Q16.85 9.35 16.75 9.25Q16.65 9.15 16.65 9Q16.65 8.85 16.75 8.75Q16.85 8.65 17 8.65H19.65V6Q19.65 5.85 19.75 5.75Q19.85 5.65 20 5.65Q20.15 5.65 20.25 5.75Q20.35 5.85 20.35 6V8.65H23Q23.15 8.65 23.25 8.75Q23.35 8.85 23.35 9Q23.35 9.15 23.25 9.25Q23.15 9.35 23 9.35H20.35V12Q20.35 12.15 20.25 12.25Q20.15 12.35 20 12.35ZM5 18.65Q4.85 18.65 4.75 18.55Q4.65 18.45 4.65 18.3Q4.65 18.15 4.75 18.05Q4.85 17.95 5 17.95H6.65V10.3Q6.65 8.425 7.9 6.887Q9.15 5.35 11.15 5V4.3Q11.15 3.925 11.387 3.687Q11.625 3.45 12 3.45Q12.375 3.45 12.613 3.687Q12.85 3.925 12.85 4.3V5Q13.475 5.125 14 5.338Q14.525 5.55 14.925 5.825Q14.45 6.475 14.225 7.35Q14 8.225 14 9Q14 10.725 14.913 12.188Q15.825 13.65 17.35 14.4V17.95H19Q19.15 17.95 19.25 18.05Q19.35 18.15 19.35 18.3Q19.35 18.45 19.25 18.55Q19.15 18.65 19 18.65Z"/>
    </Icon>
  );
});

IconMaterialNotificationAddRoundedW100Filled.displayName = 'AmauiIconMaterialNotificationAddRoundedW100Filled';

export default IconMaterialNotificationAddRoundedW100Filled;
