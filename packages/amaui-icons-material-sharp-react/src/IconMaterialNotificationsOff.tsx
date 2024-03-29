import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationsOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOff'

      short_name='NotificationsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18 15.15-2-2V10q0-1.65-1.175-2.825Q13.65 6 12 6q-.675 0-1.262.213-.588.212-1.088.587L8.2 5.35q.5-.375 1.075-.688Q9.85 4.35 10.5 4.2V2h3v2.2q1.95.5 3.225 2.087Q18 7.875 18 10ZM12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm.825-12.025ZM4 19v-2h2v-7q0-.825.213-1.625.212-.8.637-1.525l1.5 1.5q-.175.4-.262.812Q8 9.575 8 10v7h6.2L1.4 4.2l1.4-1.4 18.4 18.4-1.4 1.4-3.65-3.6Zm7.075-5.1Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOff.displayName = 'AmauiIconMaterialNotificationsOff';

export default IconMaterialNotificationsOff;
