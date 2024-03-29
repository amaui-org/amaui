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
      <path d="M19 8q-1.25 0-2.125-.875T16 5q0-1.25.875-2.125T19 2q1.25 0 2.125.875T22 5q0 1.25-.875 2.125T19 8ZM2 20V4h12.1q-.1.5-.1 1t.1 1q.175.8.575 1.487.4.688.975 1.213L12 11 4 6v2l8 5 5.275-3.3q.425.15.85.225Q18.55 10 19 10q.8 0 1.575-.25Q21.35 9.5 22 9v11Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnreadFilled.displayName = 'AmauiIconMaterialMarkEmailUnreadFilled';

export default IconMaterialMarkEmailUnreadFilled;
