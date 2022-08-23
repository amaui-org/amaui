import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationsOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOffSharp'
      short_name='NotificationsOff'

      {...props}
    >
      <path d="M19.8 22.6 16.15 19H4V17H6V10Q6 9.7 6.025 9.438Q6.05 9.175 6.1 8.9L1.4 4.2L2.8 2.8L21.2 21.2ZM18 15.15 16 13.15V10Q16 8.35 14.825 7.175Q13.65 6 12 6Q11.325 6 10.738 6.213Q10.15 6.425 9.65 6.8L8.2 5.35Q8.7 4.975 9.275 4.662Q9.85 4.35 10.5 4.2V2H13.5V4.2Q15.45 4.7 16.725 6.287Q18 7.875 18 10ZM11.075 13.9Q11.075 13.9 11.075 13.9Q11.075 13.9 11.075 13.9ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22ZM8 17H14.15L8 10.8Q8 10.8 8 10.8Q8 10.8 8 10.8ZM12.825 9.975Q12.825 9.975 12.825 9.975Q12.825 9.975 12.825 9.975Q12.825 9.975 12.825 9.975Q12.825 9.975 12.825 9.975Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOffSharp.displayName = 'AmauiIconMaterialNotificationsOffSharp';

export default IconMaterialNotificationsOffSharp;
