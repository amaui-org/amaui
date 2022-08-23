import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationsPausedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsPausedRoundedFilled'
      short_name='NotificationsPaused'

      {...props}
    >
      <path d="M10.525 16H13.85Q14.225 16 14.488 15.738Q14.75 15.475 14.75 15.1Q14.75 14.725 14.488 14.462Q14.225 14.2 13.85 14.2H12L14.425 11.225Q14.6 11.025 14.675 10.787Q14.75 10.55 14.75 10.275Q14.75 9.775 14.363 9.387Q13.975 9 13.475 9H10.15Q9.775 9 9.512 9.262Q9.25 9.525 9.25 9.9Q9.25 10.275 9.512 10.537Q9.775 10.8 10.15 10.8H12L9.575 13.775Q9.4 13.975 9.325 14.212Q9.25 14.45 9.25 14.725Q9.25 15.225 9.637 15.613Q10.025 16 10.525 16ZM5 19Q4.575 19 4.287 18.712Q4 18.425 4 18Q4 17.575 4.287 17.288Q4.575 17 5 17H6V10Q6 7.925 7.25 6.312Q8.5 4.7 10.5 4.2V3.5Q10.5 2.875 10.938 2.438Q11.375 2 12 2Q12.625 2 13.062 2.438Q13.5 2.875 13.5 3.5V4.2Q15.5 4.7 16.75 6.312Q18 7.925 18 10V17H19Q19.425 17 19.712 17.288Q20 17.575 20 18Q20 18.425 19.712 18.712Q19.425 19 19 19ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNotificationsPausedRoundedFilled.displayName = 'AmauiIconMaterialNotificationsPausedRoundedFilled';

export default IconMaterialNotificationsPausedRoundedFilled;
