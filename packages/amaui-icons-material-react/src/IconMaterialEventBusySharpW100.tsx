import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventBusySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventBusySharpW100'
      short_name='EventBusy'

      {...props}
    >
      <path d="M9.7 17.475 9.2 16.975 11.5 14.675 9.2 12.375 9.7 11.875 12 14.175 14.3 11.875 14.8 12.375 12.5 14.675 14.8 16.975 14.3 17.475 12 15.175ZM4.3 20.7V5.3H7.8V3H8.6V5.3H15.5V3H16.2V5.3H19.7V20.7ZM5 20H19V10.8H5ZM5 10.1H19V6H5ZM5 10.1V6V10.1Z"/>
    </Icon>
  );
});

IconMaterialEventBusySharpW100.displayName = 'AmauiIconMaterialEventBusySharpW100';

export default IconMaterialEventBusySharpW100;
