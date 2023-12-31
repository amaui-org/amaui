import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifiLockedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifiLockedFilled'

      short_name='NetworkWifiLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M174-540q67-48 145-74t161-26q83 0 161 26t145 74l58-58q-79-60-172-91t-192-31q-99 0-192 31t-172 91l58 58Zm249 363L61-539q-11-11-17.5-26T37-596q0-17 7.5-33T65-656q86-75 193.5-109.5T480-800q114 0 221.5 34.5T895-656q13 11 20.5 27t7.5 33q0 16-6.5 31T899-539l-40 40q-23-11-48-16t-51-5q-100 0-170 70t-70 170q0 26 5 51t16 48l-4 4q-11 11-26 17.5t-31 6.5q-16 0-31-6.5T423-177Zm257 57q-17 0-28.5-11.5T640-160v-120q0-17 11.5-28.5T680-320v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40q17 0 28.5 11.5T880-280v120q0 17-11.5 28.5T840-120H680Zm40-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifiLockedFilled.displayName = 'AmauiIconMaterialNetworkWifiLockedFilled';

export default IconMaterialNetworkWifiLockedFilled;
