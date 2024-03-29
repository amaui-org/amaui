import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationsOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOffFilled'

      short_name='NotificationsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.8 22.6 16.15 19H4v-2h2v-7q0-.3.025-.562.025-.263.075-.538L1.4 4.2l1.4-1.4 18.4 18.4ZM18 15.15l-9.8-9.8q.5-.375 1.075-.688Q9.85 4.35 10.5 4.2V2h3v2.2q1.95.5 3.225 2.087Q18 7.875 18 10ZM12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOffFilled.displayName = 'AmauiIconMaterialNotificationsOffFilled';

export default IconMaterialNotificationsOffFilled;
