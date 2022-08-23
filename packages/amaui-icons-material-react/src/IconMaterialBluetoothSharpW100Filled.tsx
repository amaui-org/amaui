import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBluetoothSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothSharpW100Filled'
      short_name='Bluetooth'

      {...props}
    >
      <path d="M11.65 21.35V12.85L6.4 18.1L5.9 17.6L11.5 12L5.9 6.4L6.4 5.9L11.65 11.15V2.65H11.75L16.8 7.7L12.5 12L16.8 16.3L11.75 21.35ZM12.35 11.15 15.8 7.7 12.35 4.25ZM12.35 19.75 15.8 16.3 12.35 12.85Z"/>
    </Icon>
  );
});

IconMaterialBluetoothSharpW100Filled.displayName = 'AmauiIconMaterialBluetoothSharpW100Filled';

export default IconMaterialBluetoothSharpW100Filled;
