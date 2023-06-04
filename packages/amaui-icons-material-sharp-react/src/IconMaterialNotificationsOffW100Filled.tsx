import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationsOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOffW100Filled'

      short_name='NotificationsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20 21.6-2.95-2.95H4.65v-.7h2V10.3q0-.5.075-.913.075-.412.225-.837l-3.9-3.9.5-.5L20.5 21.1Zm-2.65-6.45L8.5 6.3q.6-.575 1.288-.875.687-.3 1.362-.425V3.45h1.7V5q1.775.275 3.138 1.725 1.362 1.45 1.362 3.575ZM12 21.5q-.625 0-1.062-.438Q10.5 20.625 10.5 20h3q0 .625-.438 1.062-.437.438-1.062.438Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOffW100Filled.displayName = 'AmauiIconMaterialNotificationsOffW100Filled';

export default IconMaterialNotificationsOffW100Filled;
