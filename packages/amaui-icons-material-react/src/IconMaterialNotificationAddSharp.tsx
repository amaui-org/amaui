import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationAddSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAddSharp'
      short_name='NotificationAdd'

      {...props}
    >
      <path d="M4 19V17H6V10Q6 7.875 7.275 6.287Q8.55 4.7 10.5 4.2V2H13.5V4.2Q14.125 4.35 14.675 4.625Q15.225 4.9 15.7 5.3Q15.275 5.725 14.988 6.012Q14.7 6.3 14.275 6.725Q13.8 6.375 13.225 6.188Q12.65 6 12 6Q10.35 6 9.175 7.175Q8 8.35 8 10V17H16V14Q16.575 14 17 14Q17.425 14 18 14V17H20V19ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22ZM19 13V10H16V8H19V5H21V8H24V10H21V13ZM12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Z"/>
    </Icon>
  );
});

IconMaterialNotificationAddSharp.displayName = 'AmauiIconMaterialNotificationAddSharp';

export default IconMaterialNotificationAddSharp;
