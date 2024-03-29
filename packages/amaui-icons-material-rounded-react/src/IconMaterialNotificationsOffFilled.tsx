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
      <path d="M19.1 21.9 16.15 19H5q-.425 0-.713-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h1v-7q0-.3.025-.562.025-.263.075-.538l-4-4q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.3.3-.7.3-.4 0-.7-.3ZM12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm6-6.85-9.8-9.8q.5-.375 1.075-.688Q9.85 4.35 10.5 4.2v-.7q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062v.7q1.95.5 3.225 2.087Q18 7.875 18 10Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOffFilled.displayName = 'AmauiIconMaterialNotificationsOffFilled';

export default IconMaterialNotificationsOffFilled;
