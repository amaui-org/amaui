import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothConnectedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothConnectedFilled'

      short_name='BluetoothConnected'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22v-7.6L6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5 11 9.6V2h1l5.7 5.7-4.3 4.3 4.3 4.3L12 22Zm2-12.4 1.9-1.9L13 5.85Zm0 8.55 1.9-1.85-1.9-1.9ZM5 13.5q-.625 0-1.062-.438Q3.5 12.625 3.5 12t.438-1.062Q4.375 10.5 5 10.5t1.062.438Q6.5 11.375 6.5 12t-.438 1.062Q5.625 13.5 5 13.5Zm14 0q-.625 0-1.062-.438Q17.5 12.625 17.5 12t.438-1.062Q18.375 10.5 19 10.5t1.062.438q.438.437.438 1.062t-.438 1.062q-.437.438-1.062.438Z"/>
    </Icon>
  );
});

IconMaterialBluetoothConnectedFilled.displayName = 'AmauiIconMaterialBluetoothConnectedFilled';

export default IconMaterialBluetoothConnectedFilled;
