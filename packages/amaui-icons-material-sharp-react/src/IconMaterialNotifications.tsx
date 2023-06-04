import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotifications = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Notifications'

      short_name='Notifications'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19v-2h2v-7q0-2.075 1.25-3.688Q8.5 4.7 10.5 4.2V2h3v2.2q2 .5 3.25 2.112Q18 7.925 18 10v7h2v2Zm8-7.5ZM12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm-4-5h8v-7q0-1.65-1.175-2.825Q13.65 6 12 6q-1.65 0-2.825 1.175Q8 8.35 8 10Z"/>
    </Icon>
  );
});

IconMaterialNotifications.displayName = 'AmauiIconMaterialNotifications';

export default IconMaterialNotifications;
