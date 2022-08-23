import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationsRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsRoundedW100'
      short_name='Notifications'

      {...props}
    >
      <path d="M5 18.65Q4.85 18.65 4.75 18.55Q4.65 18.45 4.65 18.3Q4.65 18.15 4.75 18.05Q4.85 17.95 5 17.95H6.65V10.3Q6.65 8.425 7.9 6.887Q9.15 5.35 11.15 5V4.3Q11.15 3.925 11.387 3.687Q11.625 3.45 12 3.45Q12.375 3.45 12.613 3.687Q12.85 3.925 12.85 4.3V5Q14.85 5.35 16.1 6.887Q17.35 8.425 17.35 10.3V17.95H19Q19.15 17.95 19.25 18.05Q19.35 18.15 19.35 18.3Q19.35 18.45 19.25 18.55Q19.15 18.65 19 18.65ZM12 11.8Q12 11.8 12 11.8Q12 11.8 12 11.8Q12 11.8 12 11.8Q12 11.8 12 11.8ZM12 21.5Q11.4 21.5 10.95 21.075Q10.5 20.65 10.5 20H13.5Q13.5 20.65 13.075 21.075Q12.65 21.5 12 21.5ZM7.35 17.95H16.65V10.3Q16.65 8.375 15.288 7.012Q13.925 5.65 12 5.65Q10.075 5.65 8.713 7.012Q7.35 8.375 7.35 10.3Z"/>
    </Icon>
  );
});

IconMaterialNotificationsRoundedW100.displayName = 'AmauiIconMaterialNotificationsRoundedW100';

export default IconMaterialNotificationsRoundedW100;
