import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBluetoothSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothSharpFilled'
      short_name='Bluetooth'

      {...props}
    >
      <path d="M11 22V14.4L6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L11 9.6V2H12L17.7 7.7L13.4 12L17.7 16.3L12 22ZM13 9.6 14.9 7.7 13 5.85ZM13 18.15 14.9 16.3 13 14.4Z"/>
    </Icon>
  )
});

export default IconMaterialBluetoothSharpFilled;
