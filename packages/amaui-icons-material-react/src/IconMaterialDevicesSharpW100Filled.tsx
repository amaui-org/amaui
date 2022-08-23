import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDevicesSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesSharpW100Filled'
      short_name='Devices'

      {...props}
    >
      <path d="M3.275 18.4V17.35H5.275V5.25H20.325V5.95H5.975V17.35H11.325V18.4ZM15.325 18.4V8.95H20.725V18.4ZM16.025 17.35H20.025V9.65H16.025Z"/>
    </Icon>
  );
});

IconMaterialDevicesSharpW100Filled.displayName = 'AmauiIconMaterialDevicesSharpW100Filled';

export default IconMaterialDevicesSharpW100Filled;
