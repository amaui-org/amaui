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
      <path d="M8 23.7q-.275 0-.487-.213Q7.3 23.275 7.3 23t.213-.487Q7.725 22.3 8 22.3t.488.213q.212.212.212.487t-.212.487Q8.275 23.7 8 23.7Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm-4.35-4.6v-8.25L6.4 16.1l-.5-.5 5.6-5.6-5.6-5.6.5-.5 5.25 5.25V.9H12l4.8 4.8-4.3 4.3 4.3 4.3-4.8 4.8Zm.7-9.95L15.8 5.7l-3.45-3.45Zm0 8.6 3.45-3.45-3.45-3.45Z"/>
    </Icon>
  );
});

IconMaterialSettingsBluetoothW100Filled.displayName = 'AmauiIconMaterialSettingsBluetoothW100Filled';

export default IconMaterialSettingsBluetoothW100Filled;
