import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBluetoothDriveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothDriveFilled'

      short_name='BluetoothDrive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 16q.625 0 1.062-.438Q8 15.125 8 14.5t-.438-1.062Q7.125 13 6.5 13t-1.062.438Q5 13.875 5 14.5t.438 1.062Q5.875 16 6.5 16Zm9 0q.625 0 1.062-.438Q17 15.125 17 14.5t-.438-1.062Q16.125 13 15.5 13t-1.062.438Q14 13.875 14 14.5t.438 1.062Q14.875 16 15.5 16Zm3.15-5V7.2l-2.3 2.3-.7-.7 2.8-2.8-2.8-2.8.7-.7 2.3 2.3V1h.5L22 3.9 19.85 6 22 8.15 19.15 11Zm1-6.2.95-.9-.95-.95Zm0 4.3.95-.95-.95-.95ZM2 21v-9l2.45-7H15v2H5.85L4.8 10H15v2h5v9h-3v-2H5v2Z"/>
    </Icon>
  );
});

IconMaterialBluetoothDriveFilled.displayName = 'AmauiIconMaterialBluetoothDriveFilled';

export default IconMaterialBluetoothDriveFilled;
