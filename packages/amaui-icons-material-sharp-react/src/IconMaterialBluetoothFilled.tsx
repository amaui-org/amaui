import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothFilled'

      short_name='Bluetooth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22v-7.6L6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5 11 9.6V2h1l5.7 5.7-4.3 4.3 4.3 4.3L12 22Zm2-12.4 1.9-1.9L13 5.85Zm0 8.55 1.9-1.85-1.9-1.9Z"/>
    </Icon>
  );
});

IconMaterialBluetoothFilled.displayName = 'AmauiIconMaterialBluetoothFilled';

export default IconMaterialBluetoothFilled;
