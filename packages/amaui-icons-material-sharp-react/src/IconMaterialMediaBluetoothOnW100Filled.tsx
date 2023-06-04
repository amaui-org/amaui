import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaBluetoothOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOnW100Filled'

      short_name='MediaBluetoothOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.45 20.75v-4.9l-3 3-.5-.5L16.3 15l-3.4-3.35.5-.5 3 3v-4.9h.25l3.2 3.2-2.6 2.55 2.6 2.55-3.15 3.2Zm.65-6.6 1.75-1.7-1.75-1.75Zm0 5.15 1.75-1.75-1.75-1.7Zm-10.25.15q-1.125 0-1.912-.787-.788-.788-.788-1.913t.788-1.913q.787-.787 1.912-.787.575 0 1.1.225.525.225.9.675V4.55h4.55v2.1H9.55v10.1q0 1.125-.787 1.913-.788.787-1.913.787Z"/>
    </Icon>
  );
});

IconMaterialMediaBluetoothOnW100Filled.displayName = 'AmauiIconMaterialMediaBluetoothOnW100Filled';

export default IconMaterialMediaBluetoothOnW100Filled;
