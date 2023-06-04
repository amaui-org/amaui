import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsBluetoothW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBluetoothW100Filled'

      short_name='SettingsBluetooth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 23.7q-.275 0-.487-.213Q7.3 23.275 7.3 23t.213-.487Q7.725 22.3 8 22.3t.488.213q.212.212.212.487t-.212.487Q8.275 23.7 8 23.7Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm-4.35-12.85-5 5q-.1.1-.237.112-.138.013-.263-.112t-.125-.25q0-.125.125-.25L11.5 10 6.15 4.65q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l5 5V1.5q0-.2.1-.3.1-.1.25-.1.1 0 .2.05t.175.125l3.9 3.9q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25L12.5 10l3.775 3.775q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-3.9 3.9q-.075.075-.175.125-.1.05-.2.05-.15 0-.25-.1t-.1-.3Zm.7-1.7L15.8 5.7l-3.45-3.45Zm0 8.6 3.45-3.45-3.45-3.45Z"/>
    </Icon>
  );
});

IconMaterialSettingsBluetoothW100Filled.displayName = 'AmauiIconMaterialSettingsBluetoothW100Filled';

export default IconMaterialSettingsBluetoothW100Filled;
