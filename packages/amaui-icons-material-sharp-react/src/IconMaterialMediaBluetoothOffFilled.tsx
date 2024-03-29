import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaBluetoothOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOffFilled'

      short_name='MediaBluetoothOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11 8.15-2-2V3h6v4h-4Zm10.2 10.2-6.8-6.75.8-.8 2.75 2.75V9h.6L22 12.4 19.4 15l2.6 2.55Zm-2.05-4.8 1.15-1.15-1.15-1.1Zm.65 9.05-4-4-.6.6-.85-.85.6-.6L11 13.8V17q0 1.65-1.175 2.825Q8.65 21 7 21q-1.65 0-2.825-1.175Q3 18.65 3 17q0-1.65 1.175-2.825Q5.35 13 7 13q.575 0 1.062.137.488.138.938.413V11.8L1.4 4.2l1.4-1.4 18.4 18.4Z"/>
    </Icon>
  );
});

IconMaterialMediaBluetoothOffFilled.displayName = 'AmauiIconMaterialMediaBluetoothOffFilled';

export default IconMaterialMediaBluetoothOffFilled;
