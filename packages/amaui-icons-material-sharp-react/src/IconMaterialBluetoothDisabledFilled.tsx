import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothDisabledFilled'

      short_name='BluetoothDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.8 22.6-4.2-4.2L12 22h-1v-7.6L6.4 19 5 17.6l4.9-4.9-8.5-8.5 1.4-1.4 18.4 18.4ZM13 18.15 14.15 17 13 15.85Zm1.1-6.85-1.4-1.4 2.2-2.2L13 5.85v4.35l-2-2V2h1l5.7 5.7Z"/>
    </Icon>
  );
});

IconMaterialBluetoothDisabledFilled.displayName = 'AmauiIconMaterialBluetoothDisabledFilled';

export default IconMaterialBluetoothDisabledFilled;
