import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationsActiveSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsActiveSharp'
      short_name='NotificationsActive'

      {...props}
    >
      <path d="M2 10Q2 7.8 2.888 5.838Q3.775 3.875 5.425 2.45L6.85 3.85Q5.5 5.025 4.75 6.612Q4 8.2 4 10ZM20 10Q20 8.2 19.25 6.612Q18.5 5.025 17.15 3.85L18.575 2.45Q20.225 3.875 21.113 5.838Q22 7.8 22 10ZM4 19V17H6V10Q6 7.925 7.25 6.312Q8.5 4.7 10.5 4.2V2H13.5V4.2Q15.5 4.7 16.75 6.312Q18 7.925 18 10V17H20V19ZM12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22ZM8 17H16V10Q16 8.35 14.825 7.175Q13.65 6 12 6Q10.35 6 9.175 7.175Q8 8.35 8 10Z"/>
    </Icon>
  );
});

IconMaterialNotificationsActiveSharp.displayName = 'AmauiIconMaterialNotificationsActiveSharp';

export default IconMaterialNotificationsActiveSharp;
