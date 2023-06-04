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
      <path d="m19.75 21.35-2.7-2.7H5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V10.3q0-.5.075-.913.075-.412.225-.837L3.3 4.9q-.125-.125-.125-.25T3.3 4.4q.125-.125.25-.125t.25.125l16.45 16.45q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125ZM12 21.5q-.625 0-1.062-.438Q10.5 20.625 10.5 20h3q0 .625-.438 1.062-.437.438-1.062.438Zm5.35-6.35L8.5 6.3q.6-.575 1.288-.875.687-.3 1.362-.425v-.7q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6V5q1.775.275 3.138 1.725 1.362 1.45 1.362 3.575Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOffW100Filled.displayName = 'AmauiIconMaterialNotificationsOffW100Filled';

export default IconMaterialNotificationsOffW100Filled;
