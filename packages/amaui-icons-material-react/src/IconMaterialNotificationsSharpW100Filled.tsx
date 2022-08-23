import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsSharpW100Filled'
      short_name='Notifications'

      {...props}
    >
      <path d="M4.65 18.65V17.95H6.65V10.3Q6.65 8.425 7.9 6.887Q9.15 5.35 11.15 5V3.45H12.85V5Q14.85 5.35 16.1 6.887Q17.35 8.425 17.35 10.3V17.95H19.35V18.65ZM12 21.5Q11.4 21.5 10.95 21.075Q10.5 20.65 10.5 20H13.5Q13.5 20.65 13.075 21.075Q12.65 21.5 12 21.5Z"/>
    </Icon>
  );
});

IconMaterialNotificationsSharpW100Filled.displayName = 'AmauiIconMaterialNotificationsSharpW100Filled';

export default IconMaterialNotificationsSharpW100Filled;
