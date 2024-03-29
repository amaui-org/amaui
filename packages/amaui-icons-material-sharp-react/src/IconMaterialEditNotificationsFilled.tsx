import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditNotificationsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNotificationsFilled'

      short_name='EditNotifications'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.6 13v-1.775l4.975-4.975 1.775 1.775L14.375 13ZM20 7.375 18.225 5.6l1.225-1.225 1.775 1.775ZM12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm-8-3v-2h2v-7q0-2.125 1.275-3.713Q8.55 4.7 10.5 4.2V2h3v2.2q.625.15 1.175.437.55.288 1.025.663l-5.1 5.1V15h4.6l2.8-2.8V17h2v2Z"/>
    </Icon>
  );
});

IconMaterialEditNotificationsFilled.displayName = 'AmauiIconMaterialEditNotificationsFilled';

export default IconMaterialEditNotificationsFilled;
