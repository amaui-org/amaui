import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationAddSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAddSharpW100'
      short_name='NotificationAdd'

      {...props}
    >
      <path d="M4.65 18.65V17.95H6.65V10.3Q6.65 8.425 7.9 6.887Q9.15 5.35 11.15 5V3.45H12.85V5Q13.475 5.125 14.025 5.35Q14.575 5.575 15.075 5.925Q14.925 6.075 14.825 6.175Q14.725 6.275 14.575 6.425Q14.025 6.075 13.363 5.862Q12.7 5.65 12 5.65Q10.075 5.65 8.713 7.012Q7.35 8.375 7.35 10.3V17.95H16.65V13.975Q16.85 13.975 17 13.975Q17.15 13.975 17.35 13.975V17.95H19.35V18.65ZM12 21.5Q11.35 21.5 10.925 21.075Q10.5 20.65 10.5 20H13.5Q13.5 20.65 13.075 21.075Q12.65 21.5 12 21.5ZM19.65 12.35V9.35H16.65V8.65H19.65V5.65H20.35V8.65H23.35V9.35H20.35V12.35ZM12 11.8Q12 11.8 12 11.8Q12 11.8 12 11.8Q12 11.8 12 11.8Q12 11.8 12 11.8Q12 11.8 12 11.8Q12 11.8 12 11.8Q12 11.8 12 11.8Q12 11.8 12 11.8Z"/>
    </Icon>
  );
});

IconMaterialNotificationAddSharpW100.displayName = 'AmauiIconMaterialNotificationAddSharpW100';

export default IconMaterialNotificationAddSharpW100;
