import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditNotificationsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNotificationsRoundedFilled'
      short_name='EditNotifications'

      {...props}
    >
      <path d="M13.1 13Q12.9 13 12.75 12.85Q12.6 12.7 12.6 12.5V11.425Q12.6 11.375 12.75 11.075L17.575 6.25L19.35 8.025L14.525 12.85Q14.475 12.9 14.175 13ZM20 7.375 18.225 5.6 19.075 4.75Q19.225 4.6 19.438 4.6Q19.65 4.6 19.8 4.75L20.85 5.8Q21 5.95 21 6.162Q21 6.375 20.85 6.525ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22ZM5 19Q4.575 19 4.287 18.712Q4 18.425 4 18Q4 17.575 4.287 17.288Q4.575 17 5 17H6V10Q6 7.875 7.275 6.287Q8.55 4.7 10.5 4.2V3.5Q10.5 2.875 10.938 2.438Q11.375 2 12 2Q12.625 2 13.062 2.438Q13.5 2.875 13.5 3.5V4.2Q14.125 4.35 14.675 4.637Q15.225 4.925 15.7 5.3L11.175 9.825Q10.9 10.1 10.75 10.462Q10.6 10.825 10.6 11.225V13Q10.6 13.825 11.188 14.412Q11.775 15 12.6 15H14.375Q14.775 15 15.137 14.85Q15.5 14.7 15.775 14.425L18 12.2V17H19Q19.425 17 19.712 17.288Q20 17.575 20 18Q20 18.425 19.712 18.712Q19.425 19 19 19Z"/>
    </Icon>
  );
});

IconMaterialEditNotificationsRoundedFilled.displayName = 'AmauiIconMaterialEditNotificationsRoundedFilled';

export default IconMaterialEditNotificationsRoundedFilled;
