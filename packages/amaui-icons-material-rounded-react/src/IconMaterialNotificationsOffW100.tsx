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
      <path d="M5 18.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V10.3q0-.65.15-1.263.15-.612.45-1.187l.525.525q-.2.45-.312.937-.113.488-.113.988v7.65l8.975-.025L3.3 4.9q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.45 16.45q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125l-2.7-2.7Zm12.35-3.5-.7-.7V10.3q0-1.925-1.362-3.288Q13.925 5.65 12 5.65q-.75 0-1.587.287Q9.575 6.225 9 6.8l-.5-.5q.6-.575 1.288-.875.687-.3 1.362-.425v-.7q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6V5q1.775.275 3.138 1.725 1.362 1.45 1.362 3.575Zm-5.45-1.6Zm.1 7.95q-.625 0-1.062-.438Q10.5 20.625 10.5 20h3q0 .625-.438 1.062-.437.438-1.062.438Zm.825-10.75Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOffW100.displayName = 'AmauiIconMaterialNotificationsOffW100';

export default IconMaterialNotificationsOffW100;
