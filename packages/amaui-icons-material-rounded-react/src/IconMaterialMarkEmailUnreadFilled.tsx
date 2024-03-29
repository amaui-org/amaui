import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkEmailUnreadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailUnreadFilled'

      short_name='MarkEmailUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 8q-1.25 0-2.125-.875T16 5q0-1.25.875-2.125T19 2q1.25 0 2.125.875T22 5q0 1.25-.875 2.125T19 8ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h10.1q-.1.5-.1 1t.1 1q.175.8.575 1.487.4.688.975 1.213L12 11 5.3 6.8q-.425-.275-.862-.025-.438.25-.438.75 0 .225.1.413.1.187.3.312l7.075 4.425q.25.15.525.15t.525-.15l4.75-2.975q.425.15.85.225Q18.55 10 19 10q.8 0 1.575-.25Q21.35 9.5 22 9v9q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnreadFilled.displayName = 'AmauiIconMaterialMarkEmailUnreadFilled';

export default IconMaterialMarkEmailUnreadFilled;
