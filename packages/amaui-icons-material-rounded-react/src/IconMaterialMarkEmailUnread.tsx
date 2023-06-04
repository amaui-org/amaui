import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkEmailUnread = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailUnread'

      short_name='MarkEmailUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h10.1q-.1.5-.1 1t.1 1H4v12h16V9.9q.575-.125 1.075-.35.5-.225.925-.55v9q0 .825-.587 1.413Q20.825 20 20 20ZM4 6v12V6Zm15 2q-1.25 0-2.125-.875T16 5q0-1.25.875-2.125T19 2q1.25 0 2.125.875T22 5q0 1.25-.875 2.125T19 8Zm-7 3 3.65-2.275q.35.325.763.562.412.238.862.413l-4.75 2.975q-.25.15-.525.15t-.525-.15L4 8V6Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailUnread.displayName = 'AmauiIconMaterialMarkEmailUnread';

export default IconMaterialMarkEmailUnread;
