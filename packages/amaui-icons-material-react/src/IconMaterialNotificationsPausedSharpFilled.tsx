import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationsPausedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsPausedSharpFilled'
      short_name='NotificationsPaused'

      {...props}
    >
      <path d="M9.25 16H14.75V14.2H12L14.75 10.8V9H9.25V10.8H12L9.25 14.2ZM4 19V17H6V10Q6 7.925 7.25 6.312Q8.5 4.7 10.5 4.2V2H13.5V4.2Q15.5 4.7 16.75 6.312Q18 7.925 18 10V17H20V19ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNotificationsPausedSharpFilled.displayName = 'AmauiIconMaterialNotificationsPausedSharpFilled';

export default IconMaterialNotificationsPausedSharpFilled;
