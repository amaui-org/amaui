import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationsOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOffW100'

      short_name='NotificationsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.35 15.15-.7-.7V10.3q0-1.925-1.362-3.288Q13.925 5.65 12 5.65q-.75 0-1.587.287Q9.575 6.225 9 6.8l-.5-.5q.6-.575 1.288-.875.687-.3 1.362-.425V3.45h1.7V5q1.775.275 3.138 1.725 1.362 1.45 1.362 3.575ZM12 21.5q-.625 0-1.062-.438Q10.5 20.625 10.5 20h3q0 .625-.438 1.062-.437.438-1.062.438Zm.825-10.75Zm-8.175 7.9v-.7h2V10.3q0-.65.15-1.263.15-.612.45-1.187l.525.525q-.2.45-.312.937-.113.488-.113.988v7.65h8.975L3.05 4.65l.5-.5L20.5 21.1l-.5.5-2.95-2.95Zm7.25-5.1Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOffW100.displayName = 'AmauiIconMaterialNotificationsOffW100';

export default IconMaterialNotificationsOffW100;
