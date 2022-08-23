import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventBusySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventBusySharp'
      short_name='EventBusy'

      {...props}
    >
      <path d="M9.7 18.7 8.3 17.3 10.6 15 8.3 12.7 9.7 11.3 12 13.6 14.3 11.3 15.7 12.7 13.4 15 15.7 17.3 14.3 18.7 12 16.4ZM3 22V4H6V2H8V4H16V2H18V4H21V22ZM5 20H19V10H5ZM5 8H19V6H5ZM5 8V6V8Z"/>
    </Icon>
  );
});

IconMaterialEventBusySharp.displayName = 'AmauiIconMaterialEventBusySharp';

export default IconMaterialEventBusySharp;
