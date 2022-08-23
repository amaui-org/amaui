import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationsOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOffRoundedW100Filled'
      short_name='NotificationsOff'

      {...props}
    >
      <path d="M19.75 21.35 17.05 18.65H5Q4.85 18.65 4.75 18.55Q4.65 18.45 4.65 18.3Q4.65 18.15 4.75 18.05Q4.85 17.95 5 17.95H6.65V10.3Q6.65 9.8 6.725 9.387Q6.8 8.975 6.95 8.55L3.3 4.9Q3.175 4.775 3.175 4.65Q3.175 4.525 3.3 4.4Q3.425 4.275 3.55 4.275Q3.675 4.275 3.8 4.4L20.25 20.85Q20.375 20.975 20.375 21.1Q20.375 21.225 20.25 21.35Q20.125 21.475 20 21.475Q19.875 21.475 19.75 21.35ZM12 21.5Q11.375 21.5 10.938 21.062Q10.5 20.625 10.5 20H13.5Q13.5 20.625 13.062 21.062Q12.625 21.5 12 21.5ZM17.35 15.15 8.5 6.3Q9.1 5.725 9.788 5.425Q10.475 5.125 11.15 5V4.3Q11.15 3.95 11.4 3.7Q11.65 3.45 12 3.45Q12.35 3.45 12.6 3.7Q12.85 3.95 12.85 4.3V5Q14.625 5.275 15.988 6.725Q17.35 8.175 17.35 10.3Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOffRoundedW100Filled.displayName = 'AmauiIconMaterialNotificationsOffRoundedW100Filled';

export default IconMaterialNotificationsOffRoundedW100Filled;
