import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsRoundedFilled'
      short_name='Notifications'

      {...props}
    >
      <path d="M5 19Q4.575 19 4.287 18.712Q4 18.425 4 18Q4 17.575 4.287 17.288Q4.575 17 5 17H6V10Q6 7.925 7.25 6.312Q8.5 4.7 10.5 4.2V3.5Q10.5 2.875 10.938 2.438Q11.375 2 12 2Q12.625 2 13.062 2.438Q13.5 2.875 13.5 3.5V4.2Q15.5 4.7 16.75 6.312Q18 7.925 18 10V17H19Q19.425 17 19.712 17.288Q20 17.575 20 18Q20 18.425 19.712 18.712Q19.425 19 19 19ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNotificationsRoundedFilled.displayName = 'AmauiIconMaterialNotificationsRoundedFilled';

export default IconMaterialNotificationsRoundedFilled;
