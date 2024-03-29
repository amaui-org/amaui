import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaBluetoothOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOn'

      short_name='MediaBluetoothOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 21v-4.55l-2.75 2.75-.85-.85L16.75 15l-3.4-3.35.85-.85 2.75 2.75V9h.6L21 12.45 18.4 15l2.6 2.55L17.6 21Zm1.15-7.45 1.15-1.1-1.15-1.15Zm0 5.15 1.15-1.15-1.15-1.1ZM7 21q-1.65 0-2.825-1.175Q3 18.65 3 17q0-1.65 1.175-2.825Q5.35 13 7 13q.575 0 1.062.137.488.138.938.413V3h6v4h-4v10q0 1.65-1.175 2.825Q8.65 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialMediaBluetoothOn.displayName = 'AmauiIconMaterialMediaBluetoothOn';

export default IconMaterialMediaBluetoothOn;
