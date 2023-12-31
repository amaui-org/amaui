import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifiLocked = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifiLocked'

      short_name='NetworkWifiLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-320h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40ZM480-120 0-600q95-97 219.5-148.5T480-800q136 0 260.5 51.5T960-600L859-499q-23-11-48-16t-51-5q-100 0-170 70t-70 170q0 26 5 51t16 48l-61 61Zm160 0v-200h40v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40h40v200H640ZM174-540q67-48 145-74t161-26q83 0 161 26t145 74l58-58q-79-60-172-91t-192-31q-99 0-192 31t-172 91l58 58Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifiLocked.displayName = 'AmauiIconMaterialNetworkWifiLocked';

export default IconMaterialNetworkWifiLocked;
