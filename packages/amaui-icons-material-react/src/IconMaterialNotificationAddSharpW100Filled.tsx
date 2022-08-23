import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationAddSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAddSharpW100Filled'
      short_name='NotificationAdd'

      {...props}
    >
      <path d="M12 21.5Q11.35 21.5 10.925 21.075Q10.5 20.65 10.5 20H13.5Q13.5 20.65 13.075 21.075Q12.65 21.5 12 21.5ZM19.65 12.35V9.35H16.65V8.65H19.65V5.65H20.35V8.65H23.35V9.35H20.35V12.35ZM4.65 18.65V17.95H6.65V10.3Q6.65 8.425 7.9 6.887Q9.15 5.35 11.15 5V3.45H12.85V5Q13.475 5.125 14 5.338Q14.525 5.55 14.925 5.825Q14.45 6.475 14.225 7.35Q14 8.225 14 9Q14 10.725 14.913 12.188Q15.825 13.65 17.35 14.4V17.95H19.35V18.65Z"/>
    </Icon>
  );
});

IconMaterialNotificationAddSharpW100Filled.displayName = 'AmauiIconMaterialNotificationAddSharpW100Filled';

export default IconMaterialNotificationAddSharpW100Filled;
