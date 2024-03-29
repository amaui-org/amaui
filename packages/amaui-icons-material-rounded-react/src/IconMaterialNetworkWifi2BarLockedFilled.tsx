import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifi2BarLockedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi2BarLockedFilled'

      short_name='NetworkWifi2BarLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-279q0 26 5 50.5t16 47.5l-33 33q-12 12-28 12t-28-12L30-570q-12-12-12-29.5T32-628q97-84 208-128t240-44q129 0 240 43.5T928-628q13 11 13.5 28.5T930-570l-71 71q-22-10-45.5-15t-47.5-6l78-78q-79-60-172-91t-192-31q-99 0-192 31t-172 91l172 172q44-26 92.5-40t99.5-14q31 0 61.5 6.5T601-459q-38 35-59.5 81.5T520-279Zm160 159q-17 0-28.5-11.5T640-160v-120q0-17 11.5-28.5T680-320v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40q17 0 28.5 11.5T880-280v120q0 17-11.5 28.5T840-120H680Zm40-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi2BarLockedFilled.displayName = 'AmauiIconMaterialNetworkWifi2BarLockedFilled';

export default IconMaterialNetworkWifi2BarLockedFilled;
