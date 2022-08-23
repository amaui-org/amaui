import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBluetoothDisabledSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothDisabledSharp'
      short_name='BluetoothDisabled'

      {...props}
    >
      <path d="M19.8 22.6 15.6 18.4 12 22H11V14.4L6.4 19L5 17.6L9.9 12.7L1.4 4.2L2.8 2.8L21.2 21.2ZM13 18.15 14.15 17 13 15.85ZM14.1 11.3 12.7 9.9 14.9 7.7 13 5.85V10.2L11 8.2V2H12L17.7 7.7Z"/>
    </Icon>
  );
});

IconMaterialBluetoothDisabledSharp.displayName = 'AmauiIconMaterialBluetoothDisabledSharp';

export default IconMaterialBluetoothDisabledSharp;
