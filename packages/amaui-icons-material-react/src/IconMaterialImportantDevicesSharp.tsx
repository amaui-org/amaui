import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImportantDevicesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImportantDevicesSharp'
      short_name='ImportantDevices'

      {...props}
    >
      <path d="M16 21V11H22V21ZM17 19H21V13H17ZM8 21V19H10V17H2V3H20V9H18V5H4V15H14V17H12V19H14V21ZM8.7 13.75 11 12 13.3 13.75 12.45 10.9 14.75 9.05H11.9L11 6.25L10.1 9.05H7.25L9.55 10.9Z"/>
    </Icon>
  );
});

IconMaterialImportantDevicesSharp.displayName = 'AmauiIconMaterialImportantDevicesSharp';

export default IconMaterialImportantDevicesSharp;
