import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationsOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOffRoundedFilled'
      short_name='NotificationsOff'

      {...props}
    >
      <path d="M19.1 21.9 16.15 19H5Q4.575 19 4.287 18.712Q4 18.425 4 18Q4 17.575 4.287 17.288Q4.575 17 5 17H6V10Q6 9.7 6.025 9.438Q6.05 9.175 6.1 8.9L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.2 22.2 19.8 22.2Q19.4 22.2 19.1 21.9ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22ZM18 15.15 8.2 5.35Q8.7 4.975 9.275 4.662Q9.85 4.35 10.5 4.2V3.5Q10.5 2.875 10.938 2.438Q11.375 2 12 2Q12.625 2 13.062 2.438Q13.5 2.875 13.5 3.5V4.2Q15.45 4.7 16.725 6.287Q18 7.875 18 10Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOffRoundedFilled.displayName = 'AmauiIconMaterialNotificationsOffRoundedFilled';

export default IconMaterialNotificationsOffRoundedFilled;
