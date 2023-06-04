import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothW100Filled'

      short_name='Bluetooth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 21.1v-8.25L6.4 18.1l-.5-.5 5.6-5.6-5.6-5.6.5-.5 5.25 5.25V2.9H12l4.8 4.8-4.3 4.3 4.3 4.3-4.8 4.8Zm.7-9.95L15.8 7.7l-3.45-3.45Zm0 8.6 3.45-3.45-3.45-3.45Z"/>
    </Icon>
  );
});

IconMaterialBluetoothW100Filled.displayName = 'AmauiIconMaterialBluetoothW100Filled';

export default IconMaterialBluetoothW100Filled;
