import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifiLockedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifiLockedW100'

      short_name='NetworkWifiLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M681-370h80v-40q0-17-11.5-28.5T721-450q-17 0-28.5 11.5T681-410v40ZM480-194 74-600q85-73 189.5-110.5T480-748q112 0 216.5 37.5T886-600l-73 73q-22.071-11.524-46.061-16.762Q742.949-549 718-549q-88.75 0-150.875 62.125T505-336q0 24.949 5.238 48.939T527-241l-47 47Zm132 0v-176h41v-40q0-29 19.5-48.5T721-478q29 0 48.5 19.5T789-410v40h39v176H612ZM174-540q67-48 145-74t161-26q83 0 161 26t145 74l58-58q-79-60-172-91t-192-31q-99 0-192 31t-172 91l58 58Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifiLockedW100.displayName = 'AmauiIconMaterialNetworkWifiLockedW100';

export default IconMaterialNetworkWifiLockedW100;
