import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsSharpFilled'
      short_name='Notifications'

      {...props}
    >
      <path d="M4 19V17H6V10Q6 7.925 7.25 6.312Q8.5 4.7 10.5 4.2V2H13.5V4.2Q15.5 4.7 16.75 6.312Q18 7.925 18 10V17H20V19ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNotificationsSharpFilled.displayName = 'AmauiIconMaterialNotificationsSharpFilled';

export default IconMaterialNotificationsSharpFilled;
