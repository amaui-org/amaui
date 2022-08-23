import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDevicesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesSharp'
      short_name='Devices'

      {...props}
    >
      <path d="M2 20V17H4V4H21V6H6V17H12V20ZM14 20V8H22V20ZM16 17H20V10H16Z"/>
    </Icon>
  );
});

IconMaterialDevicesSharp.displayName = 'AmauiIconMaterialDevicesSharp';

export default IconMaterialDevicesSharp;
