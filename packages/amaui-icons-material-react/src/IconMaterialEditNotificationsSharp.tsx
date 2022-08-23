import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditNotificationsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNotificationsSharp'
      short_name='EditNotifications'

      {...props}
    >
      <path d="M12.6 13V11.225L17.575 6.25L19.35 8.025L14.375 13ZM20 7.375 21.225 6.15 19.45 4.375 18.225 5.6ZM4 19V17H6V10Q6 7.875 7.275 6.287Q8.55 4.7 10.5 4.2V2H13.5V4.2Q14.125 4.35 14.675 4.637Q15.225 4.925 15.7 5.3L14.275 6.725Q13.8 6.375 13.225 6.188Q12.65 6 12 6Q10.35 6 9.175 7.175Q8 8.35 8 10V17H16V14.2L18 12.2V17H20V19ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22ZM12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Z"/>
    </Icon>
  );
});

IconMaterialEditNotificationsSharp.displayName = 'AmauiIconMaterialEditNotificationsSharp';

export default IconMaterialEditNotificationsSharp;
