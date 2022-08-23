import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBluetoothDriveSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothDriveSharp'
      short_name='BluetoothDrive'

      {...props}
    >
      <path d="M6.5 16Q7.125 16 7.562 15.562Q8 15.125 8 14.5Q8 13.875 7.562 13.438Q7.125 13 6.5 13Q5.875 13 5.438 13.438Q5 13.875 5 14.5Q5 15.125 5.438 15.562Q5.875 16 6.5 16ZM15.5 16Q16.125 16 16.562 15.562Q17 15.125 17 14.5Q17 13.875 16.562 13.438Q16.125 13 15.5 13Q14.875 13 14.438 13.438Q14 13.875 14 14.5Q14 15.125 14.438 15.562Q14.875 16 15.5 16ZM2 21V12L4.45 5H15V7H5.85L4.8 10H15V12H4V17H18V12H20V21H17V19H5V21ZM18.65 11V7.2L16.35 9.5L15.65 8.8L18.45 6L15.65 3.2L16.35 2.5L18.65 4.8V1H19.15L22 3.9L19.85 6L22 8.15L19.15 11ZM19.65 4.8 20.6 3.9 19.65 2.95ZM19.65 9.1 20.6 8.15 19.65 7.2ZM4 12V17Z"/>
    </Icon>
  );
});

IconMaterialBluetoothDriveSharp.displayName = 'AmauiIconMaterialBluetoothDriveSharp';

export default IconMaterialBluetoothDriveSharp;
