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
      <path d="M174-540q67-48 145-74t161-26q83 0 161 26t145 74l58-58q-79-60-172-91t-192-31q-99 0-192 31t-172 91l58 58Zm285 325L99-575q-5-5-7-10.543-2-5.544-2-11.457 0-6.592 3-12.796T102-621q83-61 179-94t199-33q103 0 199 33t179 94q6 5 9 11.154t3 12.692q0 6.154-2 11.654t-7 10.5l-48 48q-22.071-11.524-46.061-16.762Q742.949-549 718-549q-88.75 0-150.875 62.125T505-336q0 24.949 5.238 48.939T527-241l-26 26q-5 5-10.217 6.5Q485.565-207 480-207q-5.565 0-10.783-1.5Q464-210 459-215Zm189.276 21Q633-194 622.5-204.35T612-230v-104.234Q612-349 622.35-359.5 632.7-370 648-370h5v-40q0-29 19.5-48.5T721-478q29 0 48.5 19.5T789-410v40h5q14.45 0 24.225 10.35Q828-349.3 828-334v104.234Q828-215 817.666-204.5 807.332-194 792.055-194H648.276ZM681-370h80v-40q0-17-11.5-28.5T721-450q-17 0-28.5 11.5T681-410v40Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifiLockedW100.displayName = 'AmauiIconMaterialNetworkWifiLockedW100';

export default IconMaterialNetworkWifiLockedW100;
