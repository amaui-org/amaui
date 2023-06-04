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
      <path d="m11 14.4-3.9 3.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l4.9-4.9-4.9-4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275L11 9.6V3.425q0-.425.262-.7.263-.275.663-.275.25 0 .5.112.25.113.45.313L17 7q.15.15.213.325.062.175.062.375t-.062.375Q17.15 8.25 17 8.4L13.4 12l3.6 3.6q.15.15.213.325.062.175.062.375t-.062.375Q17.15 16.85 17 17l-4.125 4.125q-.2.2-.45.313-.25.112-.5.112-.4 0-.663-.275Q11 21 11 20.575Zm2-4.8 1.9-1.9L13 5.85Zm0 8.55 1.9-1.85-1.9-1.9Z"/>
    </Icon>
  );
});

IconMaterialBluetoothFilled.displayName = 'AmauiIconMaterialBluetoothFilled';

export default IconMaterialBluetoothFilled;
