import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothW100'

      short_name='Bluetooth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.65 12.85-5 5q-.1.1-.237.112-.138.013-.263-.112t-.125-.25q0-.125.125-.25L11.5 12 6.15 6.65q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l5 5V3.5q0-.2.1-.3.1-.1.25-.1.1 0 .2.05t.175.125l3.9 3.9q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25L12.5 12l3.775 3.775q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-3.9 3.9q-.075.075-.175.125-.1.05-.2.05-.15 0-.25-.1t-.1-.3Zm.7-1.7L15.8 7.7l-3.45-3.45Zm0 8.6 3.45-3.45-3.45-3.45Z"/>
    </Icon>
  );
});

IconMaterialBluetoothW100.displayName = 'AmauiIconMaterialBluetoothW100';

export default IconMaterialBluetoothW100;
