import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothDisabledW100'

      short_name='BluetoothDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.45 21.95 16.3 16.8 12 21.1h-.35v-8.25L6.4 18.1l-.5-.5 5.6-5.6-8-8 .5-.5 17.95 17.95Zm-9.1-2.2 3.45-3.45-3.45-3.45Zm1.4-9-.5-.5L15.8 7.7l-3.45-3.45v5.1l-.7-.7V2.9H12l4.8 4.8Z"/>
    </Icon>
  );
});

IconMaterialBluetoothDisabledW100.displayName = 'AmauiIconMaterialBluetoothDisabledW100';

export default IconMaterialBluetoothDisabledW100;
