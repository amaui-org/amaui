import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationAddSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAddSharpFilled'
      short_name='NotificationAdd'

      {...props}
    >
      <path d="M12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22ZM19 13V10H16V8H19V5H21V8H24V10H21V13ZM4 19V17H6V10Q6 7.875 7.275 6.287Q8.55 4.7 10.5 4.2V2H13.5V4.2Q13.975 4.3 14.413 4.487Q14.85 4.675 15.2 4.925Q14.475 5.8 14.113 6.825Q13.75 7.85 13.75 9Q13.75 11.125 14.912 12.738Q16.075 14.35 18 15.1V17H20V19Z"/>
    </Icon>
  );
});

IconMaterialNotificationAddSharpFilled.displayName = 'AmauiIconMaterialNotificationAddSharpFilled';

export default IconMaterialNotificationAddSharpFilled;
