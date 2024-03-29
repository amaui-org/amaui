import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkWifi3BarLockedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi3BarLockedFilled'

      short_name='NetworkWifi3BarLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-279q0 26 5 50.5t16 47.5l-33 33q-12 12-28 12t-28-12L30-570q-12-12-12-29.5T32-628q97-84 208-128t240-44q130 0 240.5 43.5T928-628q13 11 13.5 28.5T930-570l-71 71q-22-10-45-15t-48-6l78-78q-78-59-170.5-90.5T480-720q-101 0-193.5 31.5T116-598l116 116q53-38 116-59.5T480-563q56 0 108 14.5t98 40.5q-73 23-119.5 85.5T520-279Zm160 159q-17 0-28.5-11.5T640-160v-120q0-17 11.5-28.5T680-320v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40q17 0 28.5 11.5T880-280v120q0 17-11.5 28.5T840-120H680Zm40-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi3BarLockedFilled.displayName = 'AmauiIconMaterialNetworkWifi3BarLockedFilled';

export default IconMaterialNetworkWifi3BarLockedFilled;
