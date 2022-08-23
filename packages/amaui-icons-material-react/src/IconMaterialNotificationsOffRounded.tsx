import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationsOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOffRounded'
      short_name='NotificationsOff'

      {...props}
    >
      <path d="M19.1 21.9 16.15 19H5Q4.575 19 4.287 18.712Q4 18.425 4 18Q4 17.575 4.287 17.288Q4.575 17 5 17H6V10Q6 9.7 6.025 9.438Q6.05 9.175 6.1 8.9L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.788 21.188Q20.8 21.6 20.5 21.9Q20.225 22.175 19.812 22.175Q19.4 22.175 19.1 21.9ZM18 15.15 16 13.15V10Q16 8.35 14.825 7.175Q13.65 6 12 6Q11.325 6 10.738 6.213Q10.15 6.425 9.65 6.8L8.2 5.35Q8.7 4.975 9.275 4.662Q9.85 4.35 10.5 4.2V3.5Q10.5 2.875 10.938 2.438Q11.375 2 12 2Q12.625 2 13.062 2.438Q13.5 2.875 13.5 3.5V4.2Q15.45 4.7 16.725 6.287Q18 7.875 18 10ZM11.075 13.9Q11.075 13.9 11.075 13.9Q11.075 13.9 11.075 13.9ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22ZM8 17H14.15L8 10.8Q8 10.8 8 10.8Q8 10.8 8 10.8ZM12.825 9.975Q12.825 9.975 12.825 9.975Q12.825 9.975 12.825 9.975Q12.825 9.975 12.825 9.975Q12.825 9.975 12.825 9.975Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOffRounded.displayName = 'AmauiIconMaterialNotificationsOffRounded';

export default IconMaterialNotificationsOffRounded;
