import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsBluetoothSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBluetoothSharp'
      short_name='SettingsBluetooth'

      {...props}
    >
      <path d="M8 24Q7.575 24 7.287 23.712Q7 23.425 7 23Q7 22.575 7.287 22.288Q7.575 22 8 22Q8.425 22 8.713 22.288Q9 22.575 9 23Q9 23.425 8.713 23.712Q8.425 24 8 24ZM12 24Q11.575 24 11.288 23.712Q11 23.425 11 23Q11 22.575 11.288 22.288Q11.575 22 12 22Q12.425 22 12.713 22.288Q13 22.575 13 23Q13 23.425 12.713 23.712Q12.425 24 12 24ZM16 24Q15.575 24 15.288 23.712Q15 23.425 15 23Q15 22.575 15.288 22.288Q15.575 22 16 22Q16.425 22 16.712 22.288Q17 22.575 17 23Q17 23.425 16.712 23.712Q16.425 24 16 24ZM11 20V12.4L6.4 17L5 15.6L10.6 10L5 4.4L6.4 3L11 7.6V0H12L17.7 5.7L13.4 10L17.7 14.3L12 20ZM13 7.6 14.9 5.7 13 3.85ZM13 16.15 14.9 14.3 13 12.4Z"/>
    </Icon>
  );
});

IconMaterialSettingsBluetoothSharp.displayName = 'AmauiIconMaterialSettingsBluetoothSharp';

export default IconMaterialSettingsBluetoothSharp;
