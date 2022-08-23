import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationsOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOffSharpW100Filled'
      short_name='NotificationsOff'

      {...props}
    >
      <path d="M20 21.6 17.05 18.65H4.65V17.95H6.65V10.3Q6.65 9.8 6.725 9.387Q6.8 8.975 6.95 8.55L3.05 4.65L3.55 4.15L20.5 21.1ZM17.35 15.15 8.5 6.3Q9.1 5.725 9.788 5.425Q10.475 5.125 11.15 5V3.45H12.85V5Q14.625 5.275 15.988 6.725Q17.35 8.175 17.35 10.3ZM12 21.5Q11.375 21.5 10.938 21.062Q10.5 20.625 10.5 20H13.5Q13.5 20.625 13.062 21.062Q12.625 21.5 12 21.5Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOffSharpW100Filled.displayName = 'AmauiIconMaterialNotificationsOffSharpW100Filled';

export default IconMaterialNotificationsOffSharpW100Filled;
