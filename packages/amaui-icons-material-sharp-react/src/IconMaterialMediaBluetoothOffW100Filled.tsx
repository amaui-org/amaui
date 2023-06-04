import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaBluetoothOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOffW100Filled'

      short_name='MediaBluetoothOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.35 7.5-.7-.7V4.55h4.55v2.1h-3.85Zm10.3 10.3-6.45-6.4.5-.5 3 3V9h.25l3.2 3.2-2.6 2.55 2.6 2.55Zm-2.25-3.9 1.75-1.7-1.75-1.75Zm1.5 7-3.75-3.75-1.4 1.4-.5-.5 1.4-1.4-5.3-5.3v5.4q0 1.175-.8 1.938-.8.762-1.9.762-1.1 0-1.9-.75-.8-.75-.8-1.95 0-1.125.788-1.913.787-.787 1.912-.787.725 0 1.225.275.5.275.775.625v-4.3L3.5 4.5 4 4l16.4 16.4Z"/>
    </Icon>
  );
});

IconMaterialMediaBluetoothOffW100Filled.displayName = 'AmauiIconMaterialMediaBluetoothOffW100Filled';

export default IconMaterialMediaBluetoothOffW100Filled;
